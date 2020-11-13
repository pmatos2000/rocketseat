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
}


function addItem(item){
    var itemElement = document.createElement("li");
    var itemText = document.createTextNode(item);

    itemElement.appendChild(itemText);
    listaRepoElement.appendChild(itemElement);
}


function renderListaRepo(){
    //Remove todos os elementos já no HTML
    listaRepoElement.innerHTML = "";
    
    for(repo of repos){
        addItem(repo);
    }
}

//Fução para executa quando a requisição foi sucesso
function buscaRepoSucesso(response){
    atualizaListaRepo(response);
    renderListaRepo();
}


//Função que executa quando da erro
function buscaRepoErro(error){
    var msg;
    if(error.response.status === 404){
        msg = "Error 404 - usuário no Github não exista."
    }
    else {
        msg = "Erro " + error.response.status;
    }
    
    //Remove todos os elementos já no HTML
    listaRepoElement.innerHTML = "";
    addItem(msg);


}


//Faz a requisição 
function buscaRepo(){
    //Url para fazer a requisição
    var url =  "https://api.github.com/users/" + entradaUsuarioElement.value + "/repos";

    //Realiza a requisiçõa
    axios.get(url)
        .then(buscaRepoSucesso)
        .catch(buscaRepoErro);

    //Limpa o campo de entrada
    entradaUsuarioElement.value = "";

    //Exibe mensagem de Carregando...
    listaRepoElement.innerHTML = "";
    addItem("Carregando...");

}

//Define o comportamento do botão
buscarButtonElement.onclick = buscaRepo;