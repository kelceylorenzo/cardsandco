import React from 'react';
import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';
import '../assets/css/app.css';

const App = () => {
	const pageStyle = {
		backgroundImage: `url('${backgroundImage}')`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};
	return (
		<div className="page-container" style={pageStyle}>
			<Header />
			<StatsContainer />
			<GameArea />
		</div>
	);
};

export default App;
