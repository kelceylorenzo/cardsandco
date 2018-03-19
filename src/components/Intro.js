import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
	return (
		<div className="page-container intro-page">
			<div className="intro-container">
				<div className="intro-title">Cards&Co.</div>
				<div className="intro-subtitle">A MEMORY MATCH GAME</div>
				<div className="start-buttons">
					<Link to="/select-cardpack" className="start-button">
						PLAY
					</Link>
					<Link to="/about" className="start-button">
						ABOUT
					</Link>
				</div>
			</div>
		</div>
	);
};
