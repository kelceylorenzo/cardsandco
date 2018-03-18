import types from './types';
import gameImages from '../components/gameImages';

export function createCards() {
	return {
		type: types.CREATE_CARDS,
		payload: gameImages
	};
}

export function revealCard(cardFront, cardIndex) {
	return {
		type: types.REVEAL_CARD,
		payload: {
			cardFront,
			cardIndex
		}
	};
}

export function revertCards() {
	return {
		type: types.REVERT_CARDS
	};
}

export function checkPair() {
	return {
		type: types.CHECK_PAIR
	};
}

export function resetGame() {
	return {
		type: types.RESET_GAME
	};
}
