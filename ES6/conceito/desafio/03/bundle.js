"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
/*
const r = arr.map( function(item){ 
    return item + 10;}
);
*/

var r = arr.map(function (item) {
  return item + 10;
});
console.log(r); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};
/*
function mostraIdade(usuario){ 
    return usuario.idade;
}
*/

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

var r2 = mostraIdade(usuario);
console.log(r2); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;
/*
function mostraUsuario(nome = 'Diego', idade = 18){
    return { nome, idade };
}
*/

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

var r3 = mostraUsuario(nome, idade);
var r4 = mostraUsuario(nome);
console.log(r3, r4); // 3.4

/*
const promise = function() {  
    return new Promise(function(resolve, reject) {
        return resolve();
    });
}; 
*/

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
