const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC",
    },
};

//Desestruturação
const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome }){
    console.log(nome);
}

mostraNome(usuario);