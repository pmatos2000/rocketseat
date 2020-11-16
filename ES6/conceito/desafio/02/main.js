const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map( usuarios => usuarios.idade);
console.log(idades); //[23, 15, 30]

const filter = usuarios.filter (usuario => (usuario.empresa === "Rocketseat"  && usuario.idade > 18));
console.log(filter); //[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const find = usuarios.find (usuario => (usuario.empresa === "Google"));
console.log(find); //undefined

const usuarios2 = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2}));
const filter2 = usuarios2.filter (usuario => (usuario.idade <= 50));
console.log(filter2);  //[{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },]