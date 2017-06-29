var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation, nice library for CSS
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
   <p>Boiler plate 3</p>,
    document.getElementById('app')
);
