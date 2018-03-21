import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

class WinModal extends Component {
	handleResetGame() {
		this.props.resetGame();
	}

	render() {
		return (
			<div className="modal-container">
				<div className="win-modal-title">You Won!</div>
				<div className="win-modal-buttons-container">
					<button
						to="/select-cardpack"
						className="win-modal-button"
						onClick={this.handleResetGame.bind(this)}
					>
						PLAY AGAIN
					</button>
				</div>
				<div className="close-button" onClick={this.props.closeModal}>
					X
				</div>
			</div>
		);
	}
}

export default connect(null, { resetGame })(WinModal);
