// Main container for the Weather app

var React = require('react');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
		return (
			<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-6 large-4 small-centered">
						{props.children}
					</div>
				</div>
			</div>
		);
};

module.exports = Main;