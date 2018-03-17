import types from '../actions/types';

const DEFAULT_STATE = {
	numberOfCards: 0,
	numberOfMatches: 0,
	cardFronts: [],
	gameBoardCheck: [],
	firstCardClicked: null,
	secondCardClicked: null,
	attempts: 0
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
		case types.FLIP_CARD:
			let { firstCardClicked, secondCardClicked, gameBoardCheck, attempts, numberOfMatches } = state;
			let { cardIndex, cardFront } = action.payload;
			//check corresponding index in gameBoardCheck
			//if true: return state
			if (gameBoardCheck[cardIndex] || firstCardClicked === action.payload || secondCardClicked !== null) {
				return state;
			}

			//check if firstCardClicked is null
			//if null: change corresponding index in gameBoardCheck to true set to action.payload.cardFront; return state
			if (!firstCardClicked) {
				firstCardClicked = action.payload;
				gameBoardCheck[cardIndex] = true;
				return {
					...state,
					firstCardClicked: action.payload,
					gameBoardCheck
				};
			}

			//if not null: set to secondCardClicked
			gameBoardCheck[cardIndex] = true;

			return {
				...state,
				secondCardClicked: action.payload,
				gameBoardCheck
			};

		case types.CHECK_CARD:
			//check to ensure that cards have been clicked
			if (state.firstCardClicked === null) {
				return state;
			}
			//check if firstCardClicked and secondCardClicked are the same
			//if true : increment numberOfMatches
			if (state.firstCardClicked.cardFront === state.secondCardClicked.cardFront) {
				return {
					...state,
					firstCardClicked: null,
					secondCardClicked: null,
					attempts: attempts + 1,
					numberOfMatches: numberOfMatches + 1
				};
			}

			//if false: change corresponding indexes in gameBoardCheck to false, increment attempts
			let newGameBoardCheck = state.gameBoardCheck;
			newGameBoardCheck[state.firstCardClicked.cardIndex] = false;
			newGameBoardCheck[state.secondCardClicked.cardIndex] = false;
			return {
				...state,
				firstCardClicked: null,
				secondCardClicked: null,
				gameBoardCheck: newGameBoardCheck,
				attempts: attempts + 1
			};

		default:
			return state;
	}
}
