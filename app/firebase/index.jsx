import firebase from 'firebase';

try{
    var config = {
    apiKey: "AIzaSyCxPF4s6AOZtxsjvjnxmx4TYL5ZN-rSQdI",
    authDomain: "mead-todo-app-ad569.firebaseapp.com",
    databaseURL: "https://mead-todo-app-ad569.firebaseio.com",
    projectId: "mead-todo-app-ad569",
    storageBucket: "mead-todo-app-ad569.appspot.com",
    messagingSenderId: "570933368522"
  };

firebase.initializeApp(config);
}catch(e){
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;