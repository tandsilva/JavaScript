console.log(typeof Object)//function

console.log(typeof new Object)// criando um objeto instancianando na hora
console.log(typeof new Object())// criando um objeto instancianando na hora//tambem poderia ser usado os parenteses se for necessario
const Cliente = function(){}//criando uma função que apesar de ser uma constante pode ser tranformada em funcao
console.log(typeof Cliente)//function
console.log(typeof new Cliente)//object
class Produto{}//criando uma classe mas p js vai interpretar isso como uma funcao
console.log(typeof Produto)//function
console.log(typeof new Produto)//object