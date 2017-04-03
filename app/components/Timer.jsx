// Timer Component for the Timer app
var React = require('react');
var TimerClock = require('TimerClock');
var TimerControls = require('TimerControls');
//var ErrorModal = require('ErrorModal');

var Timer = React.createClass({

	getInitialState: function(){
		return {
		}
	}
	,

	// See if we should do a search from a passed in parameter
	componentDidMount: function () {
//		var location = this.props.location.query.location;
	},

	// See if the location changed
	componentWillReceiveProps: function (NewProps) {
//		var location = NewProps.location.query.location;
	},

	render: function() {
//		var {} = this.state;

// Render the timer or the countdown
/*
		function renderMessage() {
			if( isLoading) {
				return <h3 className="text=center">Fetching Timer...</h3>;
			}
			else if (temp && location) {
				return <TimerClock location={location} temp={temp}></TimerClock>;
			}
		}
*/

/*
		function renderError() {
			if( typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}
*/

		return (
			<div>
				<h1 className="text-center page-title">Timer</h1>
				<TimerClock></TimerClock>
				<TimerControls></TimerControls>
			</div>
		);
	}
});

module.exports = Timer;