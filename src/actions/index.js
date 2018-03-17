import types from './types';
import gameImages from '../components/gameImages';

export function createCards() {
	return {
		type: types.CREATE_CARDS,
		payload: gameImages
	};
}

export function flipCard(cardFront, cardIndex) {
	return {
		type: types.FLIP_CARD,
		payload: {
			cardFront,
			cardIndex
		}
	};
}

export function checkCard() {
	return {
		type: types.CHECK_CARD
	};
}
