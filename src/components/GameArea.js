import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCards, handleCardClick } from '../actions';
import Card from './Card';
import cardBack from '../assets/images/balloon-elite.png';

class GameArea extends Component {
	componentDidMount() {
		this.props.selectCards();
	}

	render() {
		let cards = this.props.cardFronts.map((currentCardFront, index) => {
			let flipped = false;
			if (this.props.gameBoardCheck[index]) {
				flipped = true;
			}
			return (
				<Card
					key={index}
					index={index}
					flipped={flipped}
					cardFront={currentCardFront}
					cardBack={cardBack}
				/>
			);
		});
		return (
			<div className="game-area">
				<div>this will be the game area</div>
				{cards}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cardFronts: state.game.cardFronts,
		gameBoardCheck: state.game.gameBoardCheck
	};
}

export default connect(mapStateToProps, { selectCards, handleCardClick })(GameArea);
