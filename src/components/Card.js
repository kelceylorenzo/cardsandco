import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkCard } from '../actions';

class Card extends Component {
	cardClicked(event) {
		this.props.checkCard(event.target, this.props.cardFront, this.props.index);
	}

	render() {
		let style = {
			display: ''
		};

		if (this.props.flipped) {
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

export default connect(null, { checkCard })(Card);
