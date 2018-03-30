import React, { Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, revertCards } from '../actions';

class Card extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.noMatch) {
			this.resetCards = setTimeout(this.props.revertCards, 1000);
		}
	}

	cardClicked() {
		this.props.revealCard(this.props.cardFront, this.props.index);
	}

	render() {
		let backStyle = {
			display: ''
		};

		if (this.props.gameBoardCheck[this.props.index]) {
			backStyle.display = 'none';
		}

		return (
			<div className="card" onClick={this.cardClicked.bind(this)}>
				<div className="back" style={backStyle}>
					<img src={this.props.cardPack} />
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
