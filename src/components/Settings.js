import React, { Component } from 'react';

export default (props) => {
	return (
		<div className="modal-container">
			<div className="close-button" onClick={props.closeModal}>
				X
			</div>

			<div className="modal-title">Settings</div>
			<div className="modal-subtitle">
				Choosing any of the options below will lose your current game's progress
			</div>
			<div className="modal-buttons-container">
				<div className="modal-button" onClick={() => props.redirectPage('select-cardpack')}>
					CHANGE CARD PACK
				</div>
				<div className="modal-button" onClick={() => props.redirectPage('about')}>
					ABOUT
				</div>
				<div className="modal-button" onClick={() => props.redirectPage('home')}>
					RETURN TO HOME
				</div>
			</div>
		</div>
	);
};
