//REST
const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat",
};

//REST - Objetos
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

//REST em vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//REST Em função
function soma(...args){
    return args.reduce ( (total, next) => total + next );
}

console.log(soma(1,2,3,4,5,6,7,8,9,10));

//SPREAD

//SPREAD vetor
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

//SPREAD objeto
const usuario2 = { ...usuario, nome:"Paulo"};

