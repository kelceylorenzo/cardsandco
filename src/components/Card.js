import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="back">
					<img src={this.props.cardBack} alt="" />
				</div>
				<div className="front">
					<img src={this.props.cardFront} alt="" />
				</div>
			</div>
		);
	}
}

export default Card;
