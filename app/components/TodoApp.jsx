var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

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
    
    handleAddTodo: function(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text:text,
                    status:false
                }
            ]
        });
        //TodoAPI.setTodos(this.state.todos);  
    },
    
    handleSearch: function(showCompleted, searchText){
      this.setState({
         showCompleted: showCompleted,
         searchText: searchText.toLowerCase(),
      });  
    },
    
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.status =! todo.status;
            }
           return todo; 
        });
        
        this.setState({
           todos: updatedTodos 
        });
    },
    
    render: function(){
        var {todos, showCompleted, searchText} = this.state;
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return(
            <div>
                <div className="row">
                    <div className="column small-centered medium-6 large-4">
                                 <h1>Todo App</h1>       
                        <TodoSearch onSearch={this.handleSearch}/>  
                        <TodoList todos={filterTodos} onToggle={this.handleToggle} />   
                        <AddTodo addTodo={this.handleAddTodo}  />    
                    </div>
                </div>
            </div>
   
        );
    }
});

module.exports = TodoApp;