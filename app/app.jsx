// Import React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require ('Main');
var Timer = require ('Timer');
var Countdown = require ('Countdown');


// Load foundation styles
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// Our custom app css
require('style!css!sass!applicationStyles')

// Now actually render our class to the DOM
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
    document.getElementById('app')
);
