// 3.1
const arr = [1, 2, 3, 4, 5];
/*
const r = arr.map( function(item){ 
    return item + 10;}
);
*/

const r = arr.map(item => item +10);
console.log(r);


// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

/*
function mostraIdade(usuario){ 
    return usuario.idade;
}
*/

const mostraIdade =  usuario => usuario.idade;
const r2 = mostraIdade(usuario);
console.log(r2);


// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

/*
function mostraUsuario(nome = 'Diego', idade = 18){
    return { nome, idade };
}
*/

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade});
const r3 = mostraUsuario(nome, idade);
const r4 = mostraUsuario(nome);
console.log(r3, r4);

// 3.4

/*
const promise = function() {  
    return new Promise(function(resolve, reject) {
        return resolve();
    });
}; 
*/

const promise = () => ( new Promise( (resolve, reject) => resolve()));