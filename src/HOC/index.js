import cardImages from '../data/gameImages';

export const createCards = () => {
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

export const revealCard = (state, payload) => {
	let { firstCardClicked, secondCardClicked, gameBoardCheck, canBeClicked } = state;
	const { cardIndex, cardFront } = payload;

	//checking that clicked card is not already flipped, the same as the first card clicked, or two unmatched cards have not been reset
	if (gameBoardCheck[cardIndex] || firstCardClicked === payload || !canBeClicked) {
		return state;
	}

	//if first card clicked
	if (!firstCardClicked) {
		firstCardClicked = payload;
		gameBoardCheck[cardIndex] = true;
		return {
			...state,
			firstCardClicked: payload,
			gameBoardCheck
		};
	}

	//if second card clicked
	gameBoardCheck[cardIndex] = true;

	return {
		...state,
		secondCardClicked: payload,
		gameBoardCheck,
		canBeClicked: false
	};
};

export const checkPair = (state) => {
	let {
		gamesPlayed,
		attempts,
		accuracy,
		numberOfMatches,
		numberOfCards,
		firstCardClicked,
		secondCardClicked
	} = state;

	attempts++;

	//if two cards clicked are the same
	if (firstCardClicked.cardFront === secondCardClicked.cardFront) {
		numberOfMatches++;
		accuracy = `${(numberOfMatches / attempts * 100).toFixed(1)}%`;

		//if player has matched all the cards
		if (numberOfMatches === numberOfCards / 2) {
			return {
				...state,
				attempts,
				numberOfMatches,
				accuracy
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
};

export const revertCards = (state) => {
	let { firstCardClicked, secondCardClicked, gameBoardCheck } = state;
	//check to ensure that cards have not been reset to null
	if (firstCardClicked === null) {
		return state;
	}

	//resetting
	gameBoardCheck[firstCardClicked.cardIndex] = false;
	gameBoardCheck[secondCardClicked.cardIndex] = false;
	return {
		...state,
		firstCardClicked: null,
		secondCardClicked: null,
		gameBoardCheck,
		canBeClicked: true,
		noMatch: false
	};
};
