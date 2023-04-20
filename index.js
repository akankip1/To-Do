let todos;
           const saved=JSON.parse(localStorage.getItem('todos'));
           if(Array.isArray(saved)){
            todos=saved;
           }
           else{
           todos=[{
            title: 'gym',
            DueDate:'23-04-2023',
            id:1
           }];
        }
           render();
           function createitem(dateval,title){
            todos.push({
                title: title,
                DueDate: dateval,
                id:"id"
            });
            saveTodos();
           } 

           function deleteitem(delid){
            todos=todos.filter(function(todo){
                if(todo.id==delid){
                    return false;
                }
                else{
                    return true;
                }
                
            });
            saveTodos();
        }
        function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
      }

           function addTodo(){ 
            const textbox=document.getElementById('todo-title'); 
            const date=document.getElementById('date');           
            const title=textbox.value;
            const dateval=date.value; 
            const id= new Date().getTime();           
            
            createitem(dateval,title);
            render();           
        }       
        
        function del(event){
            const delbutton=event.target;
            const delid=delbutton.id;
            deleteitem(delid);
            render();
        }
        render: function render(){
        
            document.getElementById('todolist').innerHTML='';
            todos.forEach(function(todo){
            let element=document.createElement('div');   
            element.innerText=todo.title +" "+todo.DueDate ; 
            const delb=document.createElement('button');
            delb.innerText='Delete';
            delb.style='margin-left:15px';
            delb.onclick=del;
            delb.id=todo.id;
            element.appendChild(delb);
            todolist.appendChild(element); 
        });
        }