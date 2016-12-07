// libs																	// aternative syntax
import React from 'react';							// var React = require('react');
import ReactDOM from 'react-dom';				// var ReactDOM = require('react-dom');

// scss
import './scss/style.scss';


let User = React.createClass({

	getInitialState: function() {
		return {
			active: false
		}
	},

	render: function() {
		let active = this.state.active ? 'Yes' : 'No'
		return (
			<div className="user">
				<div>Name: {this.props.name}</div>
				<div>Active: {active}</div>
				<button onClick={this.toggleActive}>Toggle Active</button>
			</div>
		)
	},

	toggleActive: function() {
		this.setState({
			active: !this.state.active
		})
	}

})


let App = React.createClass({
	render: function() {
		// non-JSX-syntax
		// return React.createElement('h1', {}, 'Hello World')

		// JSX-syntax
		return (
			<div>
				<h1>User List</h1>
				<User name="Tobias Riemenschneider"/>
				<User name="Willi Riemenschneider"/>
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('container'))
