import types from './types';
import gameImages from '../components/gameImages';

export function selectCards() {
	return {
		type: types.SELECT_CARDS,
		payload: gameImages
	};
}

export function checkCard(event, cardFront, cardIndex) {
	return {
		type: types.CHECK_CARD,
		payload: { event, cardFront, cardIndex }
	};
}
