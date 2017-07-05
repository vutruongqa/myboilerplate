var React = require('react');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
var {connect} = require('react-redux');

export var TodoList = React.createClass({
    render: function(){
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos=()=>{   
            if(todos.length ===0){
                  return (
                    <p className="container__message">Nothing to do</p>
                  );
            }
          
            return TodoAPI.filterTodos(todos, showCompleted,searchText).map((todo)=>{
               return (
                  
                       <li>
                            <Todo key={todo.id} {...todo} />
                       </li>
               ); 
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);