import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCards, checkPair } from '../actions';
import Card from './Card';
import cardBack from '../assets/images/balloon-elite.png';

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
		let cards = this.props.cardFronts.map((currentCardFront, index) => {
			return <Card key={index} index={index} cardFront={currentCardFront} cardBack={cardBack} />;
		});
		return <div className="game-area">{cards}</div>;
	}
}

function mapStateToProps(state) {
	return {
		cardFronts: state.game.cardFronts,
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked
	};
}

export default connect(mapStateToProps, { createCards, checkPair })(GameArea);
