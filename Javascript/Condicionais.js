//ele cria variavel  na hora nao precisa declarar antes
function boasNoticias(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
//boasNoticias(9)//ja passa um valor diretoe a variavel indentifica o tipo

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
    console.log()
}
seForVerdadeEuFalo(7)//se nao passar nada ele retorna se lascou


const imprimirResultado = function(nota){
    if(nota >=7){
        console.log('aprovado')
    }else {
        console.log('reprovado')
    }
}
imprimirResultado(1)