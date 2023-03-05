const todoDiv = document.querySelector("div.todo");
const todoForm = document.createElement("form");
const childDiv1 = document.createElement("div");
const childDiv2 = document.createElement("div");
const childDiv3 = document.createElement("div");
todoDiv.appendChild(childDiv1);
todoDiv.appendChild(childDiv2);
todoDiv.appendChild(childDiv3);
childDiv1.innerText = "What is your main focus for today?";

const inputText = document.createElement("input");
inputText.type="text";
inputText.id="todoInput";
childDiv2.appendChild(todoForm);
todoForm.appendChild(inputText);


let todoMax = 0;
const todoList =[
    {
        id  : "",
        val : ""   
    }
];    


function appendStorage(id, val){
    localStorage.setItem(id, val);
}

function removeStorage(id){
    localStorage.removeItem(id);
}

function appendTodo(id, val){
    const todolistDiv = document.createElement("div");    
    todolistDiv.id = id;
    childDiv3.appendChild(todolistDiv);
    const todolistSpan = document.createElement("span");
    todolistDiv.appendChild(todolistSpan);
    todolistSpan.innerText = val; 
    const delButton = document.createElement("button");
    delButton.innerText="X";    
    todolistDiv.appendChild(delButton);       
    delButton.addEventListener("click",deleteTodo);
}

function deleteTodo(event){      
    event.target.parentNode.remove();
    removeStorage(event.target.parentNode.id);
}


function handleSubmit(event) {    
    event.preventDefault();
    let val = inputText.value;
    
    if(val === ""){
        alert("Check Login Input!");
    } else{          
        console.log("1 "+inputText.innerText);
        let id = "todo"+ (todoMax++);               
        todoList.push(id, val);        
        appendTodo(id, val);
        appendStorage(id, val);
        inputText.value=""; 
                  
    }
}

todoForm.addEventListener("submit",handleSubmit);

for (let j = 0; j < localStorage.length; j++) {    
    
    if(localStorage.key(j).substring(0,4) === "todo"){                        
        if(parseInt(localStorage.key(j).substring(4)) >= todoMax){
            todoMax = parseInt(localStorage.key(j).substring(4)) + 1;
        }                
        appendTodo(localStorage.key(j), localStorage.getItem(localStorage.key(j)));
    }    
}








