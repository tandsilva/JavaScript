//variaveis do tipo let pega tres escopos e var so dois os tres sao o global, o local e o bloco
let numero = 1
{
    let numero1 = 1
    let numero //esta dentro do escopo e vai imprimir 1 se ele nao acha valor pega o grobal
    console.log(numero)//esta dentro do escopo e vai imprimir 2
}
console.log(numero)//esta fora do escopo e vai imprimir 1