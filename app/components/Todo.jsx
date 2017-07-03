var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function(){
        var {id, text, status, createdAt, completedAt} = this.props;
        var todoClassName = status ? 'todo todo-completed' : 'todo';
        var renderDate = () =>{
            var message = 'Created ';
            var timestamp = createdAt;
            
            if(status){
                message= 'Completed ';
                timestamp = completedAt;
            }
            
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
            
        return(
            <div className={todoClassName} onClick={()=>{
                    this.props.onToggle(id);   
                }}>
                <div>
                    <input type="checkbox" checked={status}/>
                </div>
                <div>
                     <p>{text}</p>
                     <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;