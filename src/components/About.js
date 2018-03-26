import React from 'react';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';

export default (props) => {
	function goBack() {
		props.history.go(-1);
	}

	const pageStyle = {
		backgroundImage: `url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};

	return (
		<div className="page-container" style={pageStyle}>
			<div className="about-page">
				<div className="about-content-container">
					<div className="description-container">
						<div className="tagline">select your pack, unlock companions, "play beautifully"</div>
						<div className="description">
							Based on "Dots & Co" by game company DOTS, "Cards & Co" takes the cute companions from
							the adored original and transports them into this memory match game. Developer, Kelcey
							Lorenzo, took inspiration from her current mobile game obsession to create this
							project.
						</div>
						<div className="technologies">
							<b>TECHNOLOGIES USED:</b> HTML5, CSS3, Flexbox, CSS Grid, ReactJS, Redux, JavaScript,
							ES6, Adobe Photoshop
						</div>
						<div className="about-buttons-container">
							<a className="about-button" href="https://www.kelceylorenzo.com" target="_blank">
								<div>PORTFOLIO</div>
							</a>
							<div className="about-button" onClick={goBack.bind(this)}>
								BACK
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
