import cardImages from './gameImages';

export default () => {
	let originalCardImages = cardImages.slice();
	let holderArray = [];
	let randomSelectionArray = [];

	//selecting nine random card fronts out of possible 10 options
	for (let selector = 0; selector < 9; selector++) {
		let randomIndex = Math.floor(Math.random() * originalCardImages.length);
		holderArray.push(originalCardImages[randomIndex]);
		originalCardImages.splice(randomIndex, 1);
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

	return randomSelectionArray;
};
