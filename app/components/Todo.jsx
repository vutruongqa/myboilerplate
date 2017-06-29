var React = require('react');

var Todo = React.createClass({
    render: function(){
        var {id, text, status} = this.props;
    
        return(
            <div>{id}. {text}: {status}</div>

        );
    }
});

module.exports = Todo;