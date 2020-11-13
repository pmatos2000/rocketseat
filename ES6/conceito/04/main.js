//Classe
class List{
    constructor(){
        this.dados = [];
        console.log(this.dados);
    }

    add(value){
        this.dados.push(value);
        console.log(this.dados);
    }
}

//Herança 
class TodoList extends List{
    constructor(){
        super();
        this.nome = "Paulo";
    }

    exibeNome(){
        console.log(this.nome);
    }
}

var minhaLista = new TodoList();

var addTodoButton = document.getElementById("addTodo");

addTodoButton.onclick = function(){
    minhaLista.add("Novo todo");
}

minhaLista.exibeNome();

//Método estático
class Matematica{
    static soma(a,b){
        return(a + b);
    }
}

console.log(Matematica.soma(1,2));
