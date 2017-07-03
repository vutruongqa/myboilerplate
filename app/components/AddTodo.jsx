var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault(); 
      var todo = this.refs.todo.value;
        if(todo.length > 0){
            this.refs.todo.value = '';
            this.props.addTodo(todo);
        }
        else{
            this.refs.todo.focus();
        }
        
    },
    
    render: function(){
        return(
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit} ref="form">
                    <input type="text" ref="todo" placeholder="What you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
});

module.exports = AddTodo;