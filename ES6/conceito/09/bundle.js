"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
}; //Desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
