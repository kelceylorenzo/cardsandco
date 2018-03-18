import React from 'react';
import GameArea from './GameArea';
import StatsContainer from './StatsContainer';
import '../assets/css/app.css';

const App = () => (
	<div>
		<div className="header">
			<h2 className="main-title">React Redux Memory Match</h2>
		</div>
		<StatsContainer />
		<GameArea />
	</div>
);

export default App;
