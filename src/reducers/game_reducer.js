import types from '../actions/types';
import { createCards, revealCard, checkPair, revertCards } from '../HOC';

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
			return revealCard(state, action.payload);

		case types.CHECK_PAIR:
			return checkPair(state);

		case types.REVERT_CARDS:
			return revertCards(state);

		case types.RESET_GAME:
			let { gamesPlayed, numberOfMatches, numberOfCards } = state;

			if (numberOfMatches === numberOfCards / 2) {
				return {
					...state,
					numberOfCards: 18,
					numberOfMatches: 0,
					cardFronts: [],
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
				cardFronts: [],
				gameBoardCheck: new Array(18).fill(false),
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true,
				noMatch: false,
				gamesPlayed: gamesPlayed + 1,
				attempts: 0,
				accuracy: '---'
			};

		default:
			return state;
	}
}
