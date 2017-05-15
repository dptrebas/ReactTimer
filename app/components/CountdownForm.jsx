// Weather Component for the Weather app
var React = require('react');

var CountdownForm = React.createClass({

	onSubmit: function(e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		// Validate the input
		if( strSeconds && strSeconds.length > 0 )
		{
			if( strSeconds.match(/^[0-9]*$/) ) {
				this.props.onSetCountdown(parseInt(strSeconds, 10));
			}
		}

		// Always clear it out
		this.refs.seconds.value = '';
	},

	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});


module.exports = CountdownForm;