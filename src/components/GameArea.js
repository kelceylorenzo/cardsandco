import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCards } from '../actions';
import Card from './Card';
import cardBack from '../assets/images/balloon-elite.png';

class GameArea extends Component {
	componentDidMount() {
		this.props.selectCards();
	}

	render() {
		let cards = this.props.cardFronts.map((currentCardFront, index) => {
			let show = false;

			if (this.props.gameBoardCheck[index]) {
				show = true;
			}

			return <Card key={index} index={index} cardFront={currentCardFront} cardBack={cardBack} show={show} />;
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

export default connect(mapStateToProps, { selectCards })(GameArea);
