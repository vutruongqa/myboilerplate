var React = require('react');

var Todo = React.createClass({
    render: function(){
        var {id, text, status} = this.props;
    
        return(
            <div onClick={()=>{
                    this.props.onToggle(id);   
                }}>
                <input type="checkbox" checked={status}/>
                {text}
            </div>

        );
    }
});

module.exports = Todo;