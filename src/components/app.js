import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import IntroPage from './Intro';
import About from './About';
import CardSelection from './CardSelection';
import MainPage from './MainPage';
import backgroundImage from '../assets/images/Cappadocia-Desktop.png';
import '../assets/css/app.css';
import '../assets/css/transitions.css';

class App extends Component {
	render() {
		const pageStyle = {
			backgroundImage: `url('${backgroundImage}')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		return (
			<div
			// style={pageStyle}
			>
				<Route
					render={({ location }) => {
						return (
							<TransitionGroup>
								<CSSTransition timeout={3000} classNames="fade" key={location.key}>
									<Switch location={location}>
										<Route exact path="/" component={IntroPage} />
										<Route path="/about" component={About} />
										<Route path="/select-cardpack" component={CardSelection} />
										<Route path="/game" component={MainPage} />
										<Redirect to="/" />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						);
					}}
				/>
			</div>
		);
	}
}

export default App;
