// Countdown Component for the Weather app
var React = require('react');
var TimerClock = require('TimerClock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
/*
	componentWillUpdate: function (nextProps, nextState) {
		console.log('componentWillUpdate Called');
	},
*/
	componentDidUpdate: function (prevProps, prevState) {
		if( this.state.countdownStatus !== prevState.countdownStatus )
		{
			switch(this.state.countdownStatus)
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
/*
	componentWillMount: function () {
		console.log('componentWillMount Called');
	},

	componentDidMount: function () {
		console.log('componentDidMount Called');
	},
*/
	componentWillUnmount: function () {
		if( this.timer != undefined ){
			clearInterval(this.timer);
			this.timer = undefined;
		}
//		console.log('componentWillUnmount Called');
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
					count: newCount >= 0 ? newCount : 0
			});
			if( newCount === 0){
				this.setState({countdownStatus:'stopped'});
			}
		}, 1000);
	},

	// Handle a new countdown
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},

	handleStatusChange: function(newStatus) {
		this.setState({countdownStatus: newStatus});
	},

	render: function () {
		var {count, countdownStatus} = this.state;

		var renderControlArea = () => {
			if( countdownStatus != 'stopped'){
				return <Controls controlStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			}else
			{
				return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		};

		return(
			<div>
				<h1 className="page-title">Countdown App</h1>
				<TimerClock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	}

});

module.exports = Countdown;