import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame, createCards } from '../actions';

class StatsContainer extends Component {
	handleNewGameClick() {
		this.props.resetGame();
	}

	render() {
		return (
			<div className="stats-container">
				<div className="stats-title">STATS</div>

				<div className="games-played">
					<div className="label">GAMES PLAYED:</div>
					<div className="value">{this.props.gamesPlayed}</div>
				</div>

				<div className="attempts">
					<div className="label">ATTEMPTS:</div>
					<div className="value">{this.props.attempts}</div>
				</div>

				<div className="accuracy">
					<div className="label">ACCURACY:</div>
					<div className="value">{this.props.accuracy}</div>
				</div>

				<button className="reset" onClick={this.handleNewGameClick.bind(this)}>
					NEW GAME
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		attempts: state.game.attempts,
		gamesPlayed: state.game.gamesPlayed,
		accuracy: state.game.accuracy
	};
}

export default connect(mapStateToProps, { resetGame, createCards })(StatsContainer);
