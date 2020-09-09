//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


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
        todo.remove();
    }
    // check
    if(item.classList[0] === "completebtn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    } 

}