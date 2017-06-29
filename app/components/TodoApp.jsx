var React = require('react');
var Search = require('Search');
var TodoList = require('TodoList');


var TodoApp = React.createClass({
    getInitialState:function(){
      return {
         todos: [
             {
                 id: 1,
                 text:'Walk the dog',
                 status: 'true'
             },{
                 id: 2,
                 text:'Clean the yard',
                 status: 'true'
             },{
                 id: 3,
                 text:'Leave mail on porch',
                 status: 'true'
             },{
                 id:4,
                 text:'Play violin with children',
                 status: 'true'
             }
             
         ]  
      };  
    },
    
    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <div className="row">
                    <div className="column small-centered medium-6 large-4">
                                 <h1>Todo App</h1>         
                        <TodoList todos={todos} />         
                    </div>
                </div>
            </div>
   
        );
    }
});

module.exports = TodoApp;