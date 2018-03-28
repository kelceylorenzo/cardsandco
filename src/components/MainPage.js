import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import WinModal from './WinModal';
import Settings from './Settings';
import Rules from './Rules';
import PortraitModal from './PortraitModal';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';

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
				gameAreaState: (
					<CSSTransition key="win-modal" classNames="modal" timeout={500}>
						<WinModal closeModal={this.closeModal} />
					</CSSTransition>
				)
			});
		} else {
			this.setState({
				gameAreaState: null
			});
		}
	}

	openModal = () => {
		this.setState({
			gameAreaState: (
				<CSSTransition key="settings-modal" classNames="modal" timeout={500}>
					<Settings closeModal={this.closeModal} redirectPage={this.redirectPage} />
				</CSSTransition>
			)
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
		const background = {
			backgroundImage: `url('${backgroundImage}')`
		};

		return (
			<div className="page-container main-page-container" style={background}>
				<PortraitModal />
				<Header />
				<TransitionGroup component="div">{this.state.gameAreaState}</TransitionGroup>
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
