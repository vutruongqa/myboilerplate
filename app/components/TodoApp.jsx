var React = require('react');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var TodoApp = React.createClass({
    getInitialState:function(){
      return {
         showCompleted: false,
         searchText: '',
         todos: TodoAPI.getTodos()
      };  
    },
    
    componentDidUpdate:function(){
      TodoAPI.setTodos(this.state.todos);  
    },
    
//    handleAddTodo: function(text){
//        this.setState({
//            todos: [
//                ...this.state.todos,
//                {
//                    id: uuid(),
//                    text:text,
//                    status:false,
//                    createdAt: moment().unix(),
//                    completedAt: undefined
//                }
//            ]
//        });
//    },
    
//    handleSearch: function(showCompleted, searchText){
//      this.setState({
//         showCompleted: showCompleted,
//         searchText: searchText.toLowerCase()
//      });  
//    },
    
    render: function(){
        var {todos, showCompleted, searchText} = this.state;
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return(
            <div>
                <h1 className='page-title'>Todo App</h1>  
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5"> 
                       <div className="container">
                           <TodoSearch/>  
                           <TodoList/>   
                           <AddTodo/>  
                       </div>      
                    </div>
                </div>
            </div>
   
        )
    }
});

module.exports = TodoApp;