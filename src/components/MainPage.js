import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import WinModal from './WinModal';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';
import '../assets/css/app.css';

class MainPage extends Component {
	gameState = null;

	componentWillReceiveProps(nextProps) {
		if (nextProps.win) {
			this.gameState = <WinModal />;
		} else {
			this.gameState = null;
		}
	}

	render() {
		const pageStyle = {
			backgroundImage: `url('${backgroundImage}')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div className="page-container" style={pageStyle}>
				<Header />
				<div className="game-area-container">
					{this.gameState}
					<StatsContainer />
					<GameArea />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		numberOfMatches: state.game.numberOfMatches,
		numberOfCards: state.game.numberOfCards,
		win: state.game.win
	};
}

export default connect(mapStateToProps, {})(MainPage);
