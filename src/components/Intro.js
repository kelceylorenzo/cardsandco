import React from 'react';
import { Route } from 'react-router-dom';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';

export default (props) => {
	const pageStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};

	return (
		<div className="page-container intro-page" style={pageStyle}>
			<div className="intro-container">
				<div className="intro-title">Cards&Co.</div>
				<div className="intro-subtitle">A MEMORY MATCH GAME</div>
				<div className="start-buttons">
					<button className="start-button">PLAY</button>
					<button className="start-button">ABOUT</button>
				</div>
			</div>
		</div>
	);
};
