// Weather Component for the Weather app
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	describe('handleSetTimer', () => {
		it( 'should set state to started and Timer', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleResetTimer();

			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');
			
			timer.handleStatusChange('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(1);
				done();
			}, 1001);
		});

		it( 'should set state to started and Timer count to 4', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleResetTimer();

			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');

			timer.handleStatusChange('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(4);
				done();
			}, 4001);
		});

		it( 'should pause Timer on paused status', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleResetTimer();
			timer.handleStatusChange('started');

			setTimeout(() => {
				timer.handleStatusChange('paused');
				expect(timer.state.count).toBe(3);
				expect(timer.state.timerStatus).toBe('paused');
				done();
			}, 3001);
		});

		it( 'should reset count on stopped', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleResetTimer();
			timer.handleStatusChange('started');

			setTimeout(() => {
				timer.handleStatusChange('stopped');
				expect(timer.state.count).toBe(0);
				expect(timer.state.timerStatus).toBe('stopped');
				done();
			}, 1001);
		});
	});
});

