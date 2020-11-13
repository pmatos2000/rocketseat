//Valores padrão
const soma = (a = 1,b = 2) => a+b;
console.log(soma());
console.log(soma(5));
console.log(soma(100,200));