import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
      type:'SET_SEARCH_TEXT',
      searchText  
    };
};

export var addTodo = (todo) => {
    return{
        type:'ADD_TODO',
        todo
    };
};

//Asynchronous action when interacting with firebase
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
      var todo = {
                    text,
                    status:false,
                    createdAt: moment().unix(),
                    completedAt: null
      };
      var todoRef = firebaseRef.child('todos').push(todo);
      
      return todoRef.then(()=>{
         dispatch(addTodo({
             ...todo,
             id:todoRef.key
         })) 
      });
  };  
};

export var addTodos = (todos)=> {
    return{
        type:'ADD_TODOS',
        todos
    };
};

//Asynchronous action
export var startAddTodos = () => {
  return (dispatch, getState) => {
      var todoRef = firebaseRef.child('todos');
      
        return todoRef.once('value').then((snapshot)=>{
          var todos = snapshot.val() || {};
          var parsedTodo = [];
          Object.keys(todos).forEach((todoId)=>{
            parsedTodo.push({
               id:todoId,
                ...todos[todoId]
            });   
          }); 
            
          dispatch(addTodos(parsedTodo));    
        });
   };
};  


export var toggleShowCompleted = () =>{
    return {
        type:'TOGGLE_SHOW_COMPLETED'
    };
};

export var updateTodo = (id,updates) =>{
    return {
        type:'UPDATE_TODO',
        id,
        updates
    };
};

//Asynchronous action
export var startToggleTodo = (id, status) => {
    return (dispatch, getState) => {
         var todoRef = firebaseRef.child(`todos/${id}`);
         var updates = {
             status,
             completedAt: status ? moment().unix() : null
         };
         todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates)); 
         });
  };  
}