import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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
		return (
			<Route
				render={({ location }) => {
					return (
						<TransitionGroup>
							<CSSTransition key={location.key} classNames="fade" timeout={500}>
								<Switch location={location}>
									<Route exact path="/" component={IntroPage} />
									<Route exact path="/about" component={About} />
									<Route exact path="/select-cardpack" component={CardSelection} />
									<Route exact path="/game" component={MainPage} />
									<Redirect to="/" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
		);
	}
}

export default App;
