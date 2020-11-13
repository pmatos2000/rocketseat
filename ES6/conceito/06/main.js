const arr = [1, 3, 4, 5, 8, 9];

//Aplica uma função que mapeia os valores
let newArr = arr.map( function(item){
    return item * 2;
});

console.log(newArr);

newArr = arr.map( function(item, index){
    return item + index;
});


console.log(newArr);

//Reduz o vetor em um valor usando um operador
const sum  = arr.reduce( function(total, next){
    return total + next;
})

console.log(sum);

//Retorna os elementos que passa pelo filtro
const filter = arr.filter(function(item){
    return (item % 2 === 0);
})

console.log(filter);

//Retorna o primeiro valor que satisfaz uma condição
const find =  arr.find(function(item){
    return (item === 4);
})

console.log(find);