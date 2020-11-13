"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //Aplica uma função que mapeia os valores

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduz o vetor em um valor usando um operador

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Retorna os elementos que passa pelo filtro

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Retorna o primeiro valor que satisfaz uma condição

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
