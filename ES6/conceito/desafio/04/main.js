// Desestruturação simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// Desestruturação em parâmetros
function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`;
}

const r = mostraInfo({ nome: 'Diego', idade: 23 });
console.log(r);