import types from '../actions/types';

const DEFAULT_STATE = {
	numberOfCards: 0,
	numberOfMatches: 0,
	cardFronts: [],
	gameBoardCheck: [],
	firstCardClicked: {
		image: null,
		index: null
	},
	secondCardClicked: {
		image: null,
		index: null
	},
	attempts: 0
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
				cardFronts: randomSelectionArray,
				numberOfCards: randomSelectionArray.length,
				gameBoardCheck: new Array(randomSelectionArray.length).fill(false)
			};
		case types.CHECK_CARD:
			console.log('action.payload: ', action.payload);
			//check corresponding index in gameBoardCheck
			//if false: turn to true
			//if true: return state
			//check if firstCardClicked is null
			//if null: set to action.payload.cardFront; return state
			//if not null: set to secondCardClicked
			//check if firstCardClicked and secondCardClicked are the same
			//if true : increment numberOfMatches
			//if false: change corresponding indexes in gameBoardCheck to false, increment attempts

			return state;
		default:
			return state;
	}
}
