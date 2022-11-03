/* //exercicio1
function comprimentar (nome){
    console.log(`ola ${nome}`)
    return nome
}
comprimentar('maria')

//exercicio2
function idade(a,b){
    return a *b
}
console.log (idade(365,43))

function pagamentoMes(horasTrabalhadas,salarioHora){

const ordenado =horasTrabalhadas*salarioHora
console.log(`O salario mensal eh ${ordenado}`)
return ordenado
}
pagamentoMes(3000,8)

function Calendario (selecionarMes){
    mes=['Janeiro','fevereiro','marco']
  
   console.log( mes[selecionarMes])
    return mes
}
Calendario(1) */

const carrinho=['{nome:Borracha},"preco":3.45}']

carrinho.splice(0,1)
console.log(carrinho)