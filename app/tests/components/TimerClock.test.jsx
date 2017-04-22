// Weather Component for the Weather app
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TimerClock = require('TimerClock');

describe('TimerClock', () => {
	it('should exist', () => {
		expect(TimerClock).toExist();
	});
});

describe('render', () => {
	it('should render clock to output', () => {
		var clock = TestUtils.renderIntoDocument(<TimerClock totalSeconds={62}/>);
		var $el = $(ReactDOM.findDOMNode(clock));
		var actualText = $el.find('.clock-text').text();

		expect(actualText).toBe('01:02');
	});
});


describe('FormatSeconds', () => {
	it('should format seconds', () => {
		var clock = TestUtils.renderIntoDocument(<TimerClock/>);
		var seconds = 61;
		var expected = '01:01';
		var actual = clock.formatSeconds(seconds);

		expect(actual).toBe(expected);
	});
});
