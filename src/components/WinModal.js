import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame, closeModal } from '../actions';

class WinModal extends Component {
	handleResetGame() {
		this.props.resetGame();
	}

	closeModal() {
		console.log('closing modal');
		this.props.closeModal();
	}

	render() {
		return (
			<div className="win-screen-container">
				<div className="win-modal-text">You Won!</div>
				<div className="win-modal-button-container">
					<button
						to="/select-cardpack"
						className="win-modal-button"
						onClick={this.handleResetGame.bind(this)}
					>
						PLAY AGAIN
					</button>
				</div>
				<div className="close-button" onClick={this.closeModal.bind(this)}>
					X
				</div>
			</div>
		);
	}
}

export default connect(null, { resetGame, closeModal })(WinModal);
