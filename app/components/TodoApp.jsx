import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');
var imageStyle = {height: '60px',paddingRight:'7px'};

export var TodoApp = React.createClass({ 
    onLogout(e){
      e.preventDefault();
      var {dispatch} = this.props;
      dispatch(actions.startLogout());
    },
    render(){
        return(
            <div>
               <div className='page-actions'>
                   <img src="https://avatars3.githubusercontent.com/u/29119094?v=3" style={imageStyle} alt=""/>
                   <a href="#" onClick = {this.onLogout}>Logout</a>
               </div>
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

export default Redux.connect()(TodoApp);