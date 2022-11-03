const numeros = [1,2,3,4,5]


//for com proposito


let resultado = numeros.map(function(e){
    return e*2
})

console.log(resultado)


// A funcao map gera um novo array
//esta usando o return da funcao anterior
const soma10 = e=> e+10

const triplex = e => e*3

const paraDinheiro = e =>`RS ${parseFloat(e).toFixed(2).replace('.', ',')} `

//o map nao altera o array original ele gera um novo
//usou as funcoes criadas previamente para manipular o array
resultado = numeros.map(soma10).map(triplex).map(paraDinheiro)
console.log(resultado)