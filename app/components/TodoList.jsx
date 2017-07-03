var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function(){
        var {todos}=this.props;
        var renderTodos=()=>{
            return todos.map((todo)=>{
               return (
                  
                       <li>
                            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                       </li>
               ) 
            });
        };
        return(
            <div>
                 <ol>
                  {renderTodos()}
                </ol>
            </div> 
        );
    }
});

module.exports = TodoList;