// Countdown Component for the Weather app

var React = require('react');

// Make this a stateless functional component and only return one thing - Using fat arrows
var Countdown = (props) => {
		return (
			<div>
				<h1 className="text-center page-title">Countdown</h1>
				<p>This is Where the countdown goes</p>
			</div>
		);
};

module.exports = Countdown;