"use strict";

var arr = [1, 3, 4, 5, 8, 9];
/*
const newArr = arr.map( function(item){
    return item * 2;
});
*/

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: "Diego"
  };
};

console.log(teste());
