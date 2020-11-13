//Referencias aos elementos da DOM
var buscarButtonElement = document.getElementById("buscarButton");
var entradaUsuarioElement = document.getElementById("entradaUsuario");
var listaRepoElement = document.getElementById("listaRepo")

var repos;


function atualizaListaRepo(response){
    repos = [];
    for(d of response.data){
        repos.push(d.name);
    }
    renderListaRepo();
}

function renderListaRepo(){
    //Remove todos os elementos já no HTML
    listaRepoElement.innerHTML = "";
    
    for(repo of repos){
        var itemElement = document.createElement("li");
        var itemText = document.createTextNode(repo);

        itemElement.appendChild(itemText);
        listaRepoElement.appendChild(itemElement);
    }
}

//Faz a requisição 
function buscaRepo(){

    //Url para fazer a requisição
    var url =  "https://api.github.com/users/" + entradaUsuarioElement.value + "/repos";

    //Realiza a requisiçõa
    axios.get(url)
        .then(atualizaListaRepo);

    //Limpa o campo de entrada
    entradaUsuarioElement.value = "";
}



//Define o comportamento do botão
buscarButtonElement.onclick = buscaRepo;