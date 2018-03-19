import React from 'react';
import Header from './Header';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';

const App = () => {
	const pageStyle = {
		backgroundImage: `url('${backgroundImage}')`
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
