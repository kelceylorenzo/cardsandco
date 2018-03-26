import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';

export default (props) => {
	const pageStyle = {
		backgroundImage: `url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};
	return (
		<div style={pageStyle}>
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
		</div>
	);
};
