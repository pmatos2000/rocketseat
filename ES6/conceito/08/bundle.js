"use strict";

//Valores padrão
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma());
console.log(soma(5));
console.log(soma(100, 200));
