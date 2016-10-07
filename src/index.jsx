var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello! This is React.JS Boilerplate</h1>        
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);