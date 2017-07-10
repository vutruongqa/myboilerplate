import * as React from 'react';
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

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

var requireLogin = (nextState, replace, next) => {
    if(!firebase.auth().currentUser){
        replace('/');
    }
    next();
};

var redirectIfLogin = (nextState, replace, next) => {
    if(firebase.auth().currentUser){
        replace('/todos');
    }
    next();
};

ReactDOM.render(
    
   <Provider store={store}>
      {router}
   </Provider>,
    document.getElementById('app')
);
