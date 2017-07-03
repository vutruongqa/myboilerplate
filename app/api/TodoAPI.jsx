var $ = require('jquery');

module.exports ={
    getTodos:function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        //Convert string to object or array
        try{
            todos = JSON.parse(stringTodos);
        }catch(e){
            
        }
        if($.isArray(todos)){
            return todos;
        }
        else{
            return [];
        }
    },
    
    setTodos:function(todos){
         if($.isArray(todos)){
             //Convert object to string
            localStorage.setItem('todos',JSON.stringify(todos));
             return todos;
        }
    },
    
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.status || showCompleted;
        });
      
        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
       
        
        //Sort todo with none-completed item first
        filteredTodos.sort(function(a,b){
           if(!a.status && b.status){
               return -1;
           }else if(a.status && !b.status){
               return 1;
           }else{
               return 0;
           }
        });
        
        //Sort todos with non-completed first
        return filteredTodos;
    }
};