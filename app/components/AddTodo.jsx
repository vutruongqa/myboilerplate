var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault(); 
      var {dispatch} = this.props;
      var todo = this.refs.todo.value;
        if(todo.length > 0){
            this.refs.todo.value = '';
            //this.props.addTodo(todo);
             dispatch(actions.startAddTodo(todo));
        }
        else{
            this.refs.todo.focus();
        }
        
    },
    
    render: function(){  
        return(
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit} >
                    <input type="text" ref="todo" placeholder="What you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
});

export default connect()(AddTodo);
