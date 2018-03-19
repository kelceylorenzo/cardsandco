import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCards, checkPair } from '../actions';
import Card from './Card';
import balloon from '../assets/images/balloon-elite.png';
import butterfly from '../assets/images/butterfly-elite.png';
import shield from '../assets/images/shield-elite.png';
import anchor from '../assets/images/anchor-elite.png';

class GameArea extends Component {
	componentDidMount() {
		this.props.createCards();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.secondCardClicked !== null) {
			this.props.checkPair();
		}
	}

	render() {
		let cardPack = balloon;

		switch (this.props.cardPack) {
			case 'butterfly':
				cardPack = butterfly;
				break;
			case 'shield':
				cardPack = shield;
				break;
			case 'anchor':
				cardPack = anchor;
				break;
			default:
				break;
		}

		let cards = this.props.cardFronts.map((currentCardFront, index) => {
			return <Card key={index} index={index} cardFront={currentCardFront} cardPack={cardPack} />;
		});
		return <div className="game-area">{cards}</div>;
	}
}

function mapStateToProps(state) {
	return {
		cardFronts: state.game.cardFronts,
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked,
		cardPack: state.game.cardPack
	};
}

export default connect(mapStateToProps, { createCards, checkPair })(GameArea);
