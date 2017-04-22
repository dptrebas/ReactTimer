// Countdown Component for the Weather app
var React = require('react');
var TimerClock = require('TimerClock');

var Countdown = React.createClass({
	render: function () {
		return(
			<div>
				<TimerClock totalSeconds={129}/>
			</div>
		);
	}

});

module.exports = Countdown;