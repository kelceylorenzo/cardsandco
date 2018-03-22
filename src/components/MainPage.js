import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import WinModal from './WinModal';
import Settings from './Settings';
import Rules from './Rules';
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

	openModal = () => {
		this.setState({
			gameAreaState: <Settings closeModal={this.closeModal} redirectPage={this.redirectPage} />
		});
	};

	closeModal = () => {
		this.setState({
			gameAreaState: null
		});
	};

	redirectPage = (page) => {
		switch (page) {
			case 'select-cardpack':
				this.props.history.push('/select-cardpack');
				break;

			case 'home':
				this.props.history.push('/');
				break;

			case 'about':
				this.props.history.push('/about');
				break;
			default:
				return;
		}
	};

	render() {
		const pageStyle = {
			backgroundImage: `url('${backgroundImage}')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div className="page-container main-page-container" style={pageStyle}>
				<Header />
				{this.state.gameAreaState}
				<StatsContainer openModal={this.openModal} />
				<GameArea />
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
