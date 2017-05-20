// Timer Component for the Timer app
var React = require('react');
var TimerClock = require('TimerClock');
var Controls = require('Controls');
//var ErrorModal = require('ErrorModal');

var Timer = React.createClass({

	getInitialState: function(){
		return {
			count: 0,
			timerStatus: 'stopped'
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

	componentDidUpdate: function (prevProps, prevState) {
		if( this.state.timerStatus !== prevState.timerStatus )
		{
			switch(this.state.timerStatus)
			{
				// Start the timer
				case 'started':
					this.startTimer();
					break;

				// Clear the timer then fall through as if paused
				case 'stopped':
					this.setState({count: 0});

				// Clear the timer
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function () {
		if( this.timer != undefined ){
			clearInterval(this.timer);
			this.timer = undefined;
		}
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
					count: newCount >= 0 ? newCount : 0
			});
		}, 1000);
	},

	// Handle a new countdown
	handleResetTimer: function() {
		this.setState({
			count: 0,
			timerStatus: 'stopped'
		});
	},

	handleStatusChange: function(newStatus) {
		this.setState({timerStatus: newStatus});
	},

	render: function() {
		var {count, timerStatus} = this.state;

		return(
			<div>
				<h1 className="page-title">Timer App</h1>
				<TimerClock totalSeconds={count}/>
				<Controls controlStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;