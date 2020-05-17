import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './components/pages/Homepage.jsx';
import NavBar from './components/common/NavBar.jsx';
import LoginPage from "./components/pages/LoginPage";
import SignupPage from './components/pages/SignupPage.jsx';
import Calculator from "./components/pages/Calculator";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/signup" component={SignupPage} />
						<Route path="/calculator" component={Calculator} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
