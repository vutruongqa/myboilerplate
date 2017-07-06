import * as React from 'react';
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';

//Redirect to login and logout
firebase.auth().onAuthStateChanged((user)=>{
   if(user){
        hashHistory.push('/todos')   
   } else{
       hashHistory.push('/');
   }
});


store.dispatch(actions.startAddTodos());

//load foundation, nice library for CSS
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
    
   <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
           <Route path="todos" component={TodoApp}/>
           <IndexRoute component={Login}/>
        </Route>
    </Router>
   </Provider>,
    document.getElementById('app')
);
