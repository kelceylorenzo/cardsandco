import types from './types';

export function selectCardPack(selection) {
	return {
		type: types.SELECT_CARDPACK,
		payload: selection
	};
}

export function createCards() {
	return {
		type: types.CREATE_CARDS
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

export function closeModal() {
	return {
		type: types.CLOSE_MODAL
	};
}
