var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");


var todos = JSON.parse(localStorage.getItem("list_todos"));

function renderTodos(){

    //Remove todos os elementos já no HTML
    listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        var linkText = document.createTextNode("Excluir");
        
        linkElement.appendChild(linkText);
        linkElement.setAttribute("href", "#");

        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick","deleteTodo(" + pos + ")");
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}



function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    console.log(pos);
    todos.splice(pos, 1); //Remove o elemento na posição "pos"
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    json = JSON.stringify(todos);
    localStorage.setItem("list_todos", json); 
}

renderTodos();