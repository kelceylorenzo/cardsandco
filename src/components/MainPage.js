import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import WinModal from './WinModal';
import Settings from './Settings';
import Rules from './Rules';
import About from './About';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';
import '../assets/css/app.css';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameAreaState: null
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.numberOfMatches === nextProps.numberOfCards / 2 && nextProps.numberOfCards !== 0) {
			this.setState({
				gameAreaState: <WinModal closeModal={this.closeModal} />
			});
		} else {
			this.setState({
				gameAreaState: null
			});
		}
	}

	openModal = (modal) => {
		switch (modal) {
			case 'settings':
				this.setState({
					gameAreaState: <Settings closeModal={this.closeModal} />
				});
				break;
			case 'rules':
				this.setState({
					gameAreaState: <Rules closeModal={this.closeModal} />
				});
				break;
			case 'about':
				this.setState({
					gameAreaState: <About closeModal={this.closeModal} />
				});
				break;
			default:
				return;
		}
	};

	closeModal = () => {
		this.setState({
			gameAreaState: null
		});
	};

	render() {
		const pageStyle = {
			backgroundImage: `url('${backgroundImage}')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div className="page-container" style={pageStyle}>
				<Header openModal={this.openModal} />
				<div className="game-area-container">
					{this.state.gameAreaState}
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
		numberOfCards: state.game.numberOfCards
	};
}

export default connect(mapStateToProps, {})(MainPage);
