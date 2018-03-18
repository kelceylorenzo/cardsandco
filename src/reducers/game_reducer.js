import types from '../actions/types';

const DEFAULT_STATE = {
	numberOfCards: 0,
	numberOfMatches: 0,
	cardFronts: [],
	gameBoardCheck: [],
	firstCardClicked: null,
	secondCardClicked: null,
	canBeClicked: true,
	noMatch: false,
	gamesPlayed: 0,
	attempts: 0,
	accuracy: '---'
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.CREATE_CARDS:
			let holderArray = [];
			let randomSelectionArray = [];

			//selecting nine random card fronts out of possible 10 options
			for (let selector = 0; selector < 9; selector++) {
				let randomIndex = Math.floor(Math.random() * action.payload.length);
				holderArray.push(action.payload[randomIndex]);
				action.payload.splice(randomIndex, 1);
			}

			//pushing two of each card into array
			for (let index = 0; index < holderArray.length; index++) {
				randomSelectionArray.push(holderArray[index]);
				randomSelectionArray.push(holderArray[index]);
			}

			//shuffling cards
			holderArray = randomSelectionArray;
			randomSelectionArray = [];
			while (holderArray.length > 0) {
				var randomIndex = Math.floor(Math.random() * holderArray.length);
				randomSelectionArray.push(holderArray[randomIndex]);
				holderArray.splice(randomIndex, 1);
			}

			return {
				...state,
				cardFronts: randomSelectionArray,
				numberOfCards: randomSelectionArray.length,
				gameBoardCheck: new Array(randomSelectionArray.length).fill(false)
			};
		case types.REVEAL_CARD:
			let { firstCardClicked, secondCardClicked, gameBoardCheck, canBeClicked } = state;
			const { cardIndex, cardFront } = action.payload;

			//checking that clicked card is not already flipped, the same as the first card clicked, or two unmatched cards have not been reset
			if (gameBoardCheck[cardIndex] || firstCardClicked === action.payload || !canBeClicked) {
				return state;
			}

			//if first card clicked
			if (!firstCardClicked) {
				firstCardClicked = action.payload;
				gameBoardCheck[cardIndex] = true;
				return {
					...state,
					firstCardClicked: action.payload,
					gameBoardCheck
				};
			}

			//if second card clicked
			gameBoardCheck[cardIndex] = true;

			return {
				...state,
				secondCardClicked: action.payload,
				gameBoardCheck,
				canBeClicked: false
			};

		case types.CHECK_PAIR:
			let { gamesPlayed, attempts, accuracy, numberOfMatches, numberOfCards } = state;

			attempts++;

			//if two cards clicked are the same
			if (state.firstCardClicked.cardFront === state.secondCardClicked.cardFront) {
				numberOfMatches++;
				accuracy = `${(numberOfMatches / attempts * 100).toFixed(1)}%`;

				//if player has matched all the cards
				if (numberOfMatches === numberOfCards / 2) {
					return {
						...state,
						attempts,
						numberOfMatches,
						accuracy,
						gamesPlayed: gamesPlayed + 1
					};
				}
				//if player has not matched all the cards
				return {
					...state,
					numberOfCards: 0,
					numberOfMatches: 0,
					cardFronts: [],
					gameBoardCheck: [],
					firstCardClicked: null,
					secondCardClicked: null,
					canBeClicked: true,
					noMatch: false,
					gamesPlayed: 0,
					attempts: 0,
					accuracy: '---'
				};
			}

			//if two cards clicked are not the same
			accuracy = `${(numberOfMatches / attempts * 100).toFixed(1)}%`;

			return {
				...state,
				attempts,
				accuracy,
				noMatch: true
			};
		case types.REVERT_CARDS:
			//check to ensure that cards have not been reset to null
			if (state.firstCardClicked === null) {
				return state;
			}

			//resetting
			let newGameBoardCheck = state.gameBoardCheck;
			newGameBoardCheck[state.firstCardClicked.cardIndex] = false;
			newGameBoardCheck[state.secondCardClicked.cardIndex] = false;
			return {
				...state,
				firstCardClicked: null,
				secondCardClicked: null,
				gameBoardCheck: newGameBoardCheck,
				canBeClicked: true,
				noMatch: false
			};

		case types.RESET_GAME:
			console.log('reset game reducer called');
			return {
				...state,
				firstCardClicked: null,
				secondCardClicked: null,
				attempts,
				numberOfMatches,
				accuracy,
				gamesPlayed: gamesPlayed + 1
			};

		default:
			return state;
	}
}
