var react_star;
require('./lib/index.css');
require('es5-shim');
require('es5-shim/es5-sham');
var React = require('react');
var ReactDOM = require('react-dom');
var StarBar = require('./lib/star.jsx');

var options = {

}

ReactDOM.render(
<StarBar {...options} />,
document.querySelector('.star_container')
);

module.exports = require('./lib/star.jsx');
