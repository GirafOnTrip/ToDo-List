// SWITCH THEME DARK/LIGHT

const background          = document.querySelector("body") 
const themeSwitch         = document.querySelector(".todo__switch__img") 
const createTask          = document.querySelector(".name-task") 
const checkbox            = document.querySelector(".name-task__custom-checkbox")
const createTaskInput     = document.querySelector(".name-task__input") 
const taskList            = document.querySelector(".task-list")
const footerList          = document.querySelector(".footer-list")
const footerListClear     = document.querySelector(".footer-list__clear")
const footerMobile        = document.querySelector(".footer-list__filter--mobile")


themeSwitch.addEventListener("click", function(){

    footerListClear.classList.toggle('dark');
    footerMobile.classList.toggle('dark');
    background.classList.toggle('dark');
    themeSwitch.classList.toggle('dark');
    createTask.classList.toggle('dark');
    createTaskInput.classList.toggle('dark');
    taskList.classList.toggle('dark');
    checkbox.classList.toggle('dark');
    footerList.classList.toggle('dark');   
})

// ADD TASK 

// SELECTORS


const todoInput         = document.querySelector(".name-task__input");
const toDoList          = document.querySelector(".task-list__main");
const filterOption      = document.querySelector(".footer-list__filter");
const filterOptionMobile= document.querySelector(".footer-list__filter--mobile");
const clear             = document.querySelector(".footer-list__clear");
const counterItem       = document.querySelector(".footer-list__item-counter")
const frameList         = [];


// LISTENERS

createTaskInput.addEventListener('keyup', function(e){
    
    const keyName = e.key;
    
    if(keyName === 'Enter'){

        if(createTaskInput.value.length == 0 || createTaskInput.value.trim() == ''){

            alert("Please enter a task")

        } else {
        
            addTodo()
            frameList.push(createTaskInput.value)
            counter()
            createTaskInput.value = "";
        }  
    }
});

toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);
filterOptionMobile.addEventListener("input", filterTodo);
clear.addEventListener("click", clearCompleted);


// FUNCTIONS

//add task

function addTodo(){


    const todo = document.createElement("div");
    todo.classList.add("task-list__todo");
    toDoList.appendChild(todo);

    const todoCheckBox = document.createElement("input");
    todoCheckBox.classList.add("task-list__checkbox");
    todo.appendChild(todoCheckBox);

    const todoCheckBoxLabel = document.createElement("label");
    todoCheckBoxLabel.classList.add("task-list__custom-checkbox");
    todo.appendChild(todoCheckBoxLabel);
    
    const todoText = document.createElement("p");
    todoText.innerText = todoInput.value;
    todoText.classList.add("task-list__text")
    todo.appendChild(todoText);

    const todoCross = document.createElement("span");
    todoCross.classList.add("task-list__cross");
    todo.appendChild(todoCross); 

}


// delete / check task

function deleteCheck(e){
    const item = e.target;

    // DELETE TODO
    if(item.classList[0] === "task-list__cross") {
        const todo = item.parentElement;
        todo.remove();
        frameList.pop(createTaskInput.value)
        counter()
    }     

    // CHECK MARK
    if(item.classList[0] === "task-list__custom-checkbox") {
        item.classList.toggle("completed");
        item.nextSibling.classList.toggle("completed");
    }  
}


// filter task

function filterTodo(e){

    const todos = toDoList.childNodes;
    
    todos.forEach(function(todo){
        switch(e.target.value){

            case "all":

                todo.style.display = ""
                break;

            case "active" :  

                if (!todo.children[1].classList.contains("completed")){
                    todo.style.display="";
                    
                } else {
                    todo.style.display = "none";
                }  
                break;
            
            case "complete" :

                if (todo.children[1].classList.contains("completed")){
                    todo.style.display="";

                } else {
                    todo.style.display = "none";
                }  
                break;        
        }
    }); 
}

// delete task completed

function clearCompleted() {

    const todos = toDoList.querySelectorAll(".task-list__todo");
    
    todos.forEach(function(todo,){

    if (todo.children[1].classList.contains("completed")){
        
        frameList.pop(createTaskInput.value)
        todo.remove();
        counter()
        }  
})
};

// Count items

function counter(){

    counterItem.textContent=`${frameList.length}`
}

// Drag and drop 

new Sortable(toDoList, {

animation: 350

})

 





 
 
 


