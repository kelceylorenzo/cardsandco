import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flipCard, checkCard } from '../actions';

class Card extends Component {
	componentWillReceiveProps(nextProps) {
		console.log('next props: ', nextProps);
		if (nextProps.secondCardClicked === null) {
			setTimeout(this.props.checkCard, 2000);
		}
	}

	cardClicked() {
		this.props.flipCard(this.props.cardFront, this.props.index);
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
		secondCardClicked: state.game.secondCardClicked
	};
}

export default connect(mapStateToProps, { flipCard, checkCard })(Card);
