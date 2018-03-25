import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCardPack } from '../actions';
import anchor from '../assets/images/cardpack-anchor.png';
import balloon from '../assets/images/cardpack-balloon.png';
import butterfly from '../assets/images/cardpack-butterfly.png';
import shield from '../assets/images/cardpack-shield.png';

class CardSelection extends Component {
	constructor(props) {
		super(props);
		this.canBeClicked = true;
	}

	handleCardPackSelection(selection) {
		if (this.canBeClicked) {
			this.canBeClicked = false;
			this.props.selectCardPack(selection);
			setTimeout(this.redirectToGamePage.bind(this), 1000);
		}

		return;
	}

	redirectToGamePage() {
		this.props.history.push('/game');
	}

	render() {
		return (
			<div className="page-container cardpack-selection-page">
				<div className="cardpack-selection-title">select your card pack</div>

				<div className="cardpack-selectors">
					<img
						className="cardpack"
						src={anchor}
						onClick={() => this.handleCardPackSelection('anchor')}
					/>
					<img
						className="cardpack"
						src={balloon}
						onClick={() => this.handleCardPackSelection('balloon')}
					/>
					<img
						className="cardpack"
						src={butterfly}
						onClick={() => this.handleCardPackSelection('butterfly')}
					/>
					<img
						className="cardpack"
						src={shield}
						onClick={() => this.handleCardPackSelection('shield')}
					/>
				</div>
			</div>
		);
	}
}

export default connect(null, { selectCardPack })(CardSelection);
