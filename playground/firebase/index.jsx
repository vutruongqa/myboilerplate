import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCxPF4s6AOZtxsjvjnxmx4TYL5ZN-rSQdI",
    authDomain: "mead-todo-app-ad569.firebaseapp.com",
    databaseURL: "https://mead-todo-app-ad569.firebaseio.com",
    projectId: "mead-todo-app-ad569",
    storageBucket: "mead-todo-app-ad569.appspot.com",
    messagingSenderId: "570933368522"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');
//event happen when adding new note
todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('New todo changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('New todo removed', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
