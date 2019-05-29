import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import './assets/stylesheets/main.scss';

import { actions } from './reducers/AppReducer';

import Main from './pages/Main';
import SupplementaryMaterials from './pages/SupplementaryMaterials';

const mapDispatchToProps = {
	login: actions.login
};

class App extends Component {
	componentDidMount() {
		this.props.login();
	}

	render() {
		return (
			<Router basepath={process.env.PUBLIC_URL} className="app">
				<Main path="/" />
				<SupplementaryMaterials path="/supplementary" />
			</Router>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
