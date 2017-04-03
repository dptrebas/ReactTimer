// TimerControls Component for the Weather app

var React = require('react');

var TimerControls = React.createClass({

	// Handle the submit
	onFormSubmit: function(e){
		e.preventDefault();

		alert('Submitted');
	},

	// Render the form
	render: function() {
		return (
			<div>
			<form onSubmit={this.onFormSubmit}>
				<button className="button expanded hollow">Start</button>
				<button className="button expanded hollow">Clear</button>
			</form>
			</div>
		);
	}
});

module.exports = TimerControls;