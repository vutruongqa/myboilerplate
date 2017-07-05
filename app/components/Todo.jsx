var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');


var Todo = React.createClass({
    render: function(){
        var {id, text, status, createdAt, completedAt, dispatch} = this.props;
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
                      //this.props.onToggle(id);
                    dispatch(actions.toggleTodo(id));
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

module.exports = connect()(Todo);