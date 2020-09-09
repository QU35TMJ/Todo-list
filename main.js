//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    //prevents form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div') ;
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    completeButton.classList.add("completebtn")
    todoDiv.appendChild(completeButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    deleteButton.classList.add('deletebtn')
    todoDiv.appendChild(deleteButton);
    //Append div to Ul
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    // delete To do
    if(item.classList[0] === "deletebtn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        //special eventListener to wait for transformaion to end before deleting
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        
    }
    // check
    if(item.classList[0] === "completebtn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    } 

}

function filterTodo(e) {
const todos = todoList.childNodes;
 //console.log(todos);
 
 todos.forEach(function(todo) {
     switch(e.target.value){
         case "all":
             todo.style.display = "flex";
             break;
         case "complete":
            if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
         case "incomplete":
            if(!todo.classList.contains("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
        }
    });
}