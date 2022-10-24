const pessoa = {
    nome: 'João',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
}
}
const {nome, idade} = pessoa//a ideia e de desconstrucao do construtor 
console.log(nome, idade)//João 20

const {nome: n, idade: i} = pessoa//atribuindo um novo nome para a variavel i e n para a variavel n 

const {sobrenome, bemhumorada = true}= pessoa//ela recebe true para ficar dormente na operacao ,para saber que ela nao esta sendo usada
const {endereco: {logradouro, numero}} = pessoa//desconstrucao do objeto ta aprofundado o como se mergulhassem em um objeto
console.log(logradouro, numero)//Rua ABC 123
 
//outras formas de desconstrucao

const [a]= [10]//desconstrucao de um array
console.log(a)//10

const [n1, , n3, , n5] = [10, 7, 9, 8, 6]//desconstrucao de um array
console.log(n1, n3, n5)//10 9 6

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]//desconstrucao de um array
console.log(nota)//6


