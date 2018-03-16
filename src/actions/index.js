import types from './types';
import gameImages from '../components/gameImages';

export function selectCards() {
	return {
		type: types.SELECT_CARDS,
		payload: gameImages
	};
}
