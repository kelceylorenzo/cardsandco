import React, { Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, revertCards } from '../actions';

class Card extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.noMatch) {
			this.resetCards = setTimeout(this.props.revertCards, 1000);
		}
	}

	cardClicked() {
		this.props.revealCard(this.props.cardFront, this.props.index);
	}

	render() {
		let style = {
			display: ''
		};

		if (this.props.gameBoardCheck[this.props.index]) {
			style.display = 'none';
		}

		return (
			<div className="card" onClick={this.cardClicked.bind(this)}>
				<div className="back" style={style}>
					<img src={this.props.cardBack} />
				</div>
				<div className="front">
					<img src={this.props.cardFront} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked,
		noMatch: state.game.noMatch
	};
}

export default connect(mapStateToProps, { revealCard, revertCards })(Card);
