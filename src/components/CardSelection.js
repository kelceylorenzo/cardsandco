import React, { Component } from 'react';
import anchor from '../assets/images/cardpack-anchor.png';
import balloon from '../assets/images/cardpack-balloon.png';
import butterfly from '../assets/images/cardpack-butterfly.png';
import shield from '../assets/images/cardpack-shield.png';

class CardSelection extends Component {
	render() {
		return (
			<div className="page-container cardpack-selection-page">
				<div className="cardpack-selection-title">select your card pack</div>

				<div className="cardpack-selectors">
					<img className="cardpack anchor" src={anchor} />
					<img className="cardpack balloon" src={balloon} />
					<img className="cardpack butterfly" src={butterfly} />
					<img className="cardpack shield" src={shield} />
				</div>
			</div>
		);
	}
}

export default CardSelection;
