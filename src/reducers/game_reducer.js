import types from '../actions/types';
import createCards from '../HOC/createCards';

const DEFAULT_STATE = {
	numberOfCards: 0,
	numberOfMatches: 0,
	cardFronts: [],
	cardPack: '',
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
		case types.SELECT_CARDPACK:
			return {
				...state,
				cardPack: action.payload,
				attempts: 0,
				accuracy: '---',
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true
			};
		case types.CREATE_CARDS:
			return {
				...state,
				cardFronts: createCards(),
				numberOfCards: 18,
				gameBoardCheck: new Array(18).fill(false)
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
					firstCardClicked: null,
					secondCardClicked: null,
					attempts,
					accuracy,
					numberOfMatches,
					canBeClicked: true
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
			let newGamesPlayed = state.gamesPlayed;

			if (state.numberOfMatches === state.numberOfCards / 2) {
				return {
					...state,
					numberOfCards: 18,
					numberOfMatches: 0,
					cardFronts: createCards(),
					gameBoardCheck: new Array(18).fill(false),
					firstCardClicked: null,
					secondCardClicked: null,
					canBeClicked: true,
					noMatch: false,
					attempts: 0,
					accuracy: '---'
				};
			}

			return {
				...state,
				numberOfCards: 18,
				numberOfMatches: 0,
				cardFronts: createCards(),
				gameBoardCheck: new Array(18).fill(false),
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true,
				noMatch: false,
				gamesPlayed: newGamesPlayed + 1,
				attempts: 0,
				accuracy: '---'
			};

		default:
			return state;
	}
}
