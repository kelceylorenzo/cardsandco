import types from '../actions/types';

const DEFAULT_STATE = {
	numberOfCards: 0,
	cardFronts: []
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.SELECT_CARDS:
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
				cardFronts: randomSelectionArray
			};
		default:
			return state;
	}
}
