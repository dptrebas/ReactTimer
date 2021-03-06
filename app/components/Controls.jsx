// Controls
var React = require('react');

var Controls = React.createClass({

	propTypes: {
		controlStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},

	onStatusChange: function(newStatus){
		return() => {
			this.props.onStatusChange(newStatus);
		}
	},
/*
	componentWillReceiveProps: function(newProps) {
		console.log('componentWillReceiveProps Called', newProps.controlStatus);
	},
*/
	render: function () {
		var {controlStatus} = this.props;
		var renderStartStopButton = () => {
			if( controlStatus === 'started')
			{
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
			} else if ( controlStatus === 'paused')
			{
				return <button className="button primary" onClick={this.onStatusChange('started')}>Continue</button>
			} else if ( controlStatus === 'stopped')
			{
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
			}
			else
			{
			alert(controlStatus);
			}
		};

		return (
			<div className="controls">
			{renderStartStopButton()}
			<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		);
	}
});


module.exports = Controls;