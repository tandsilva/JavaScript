/* 
//passa dois valores 
function RealizandoRandoEmjs(min,max){
    const valor = Math.random() * (max - min)+ min//esta linha vai fazer ela ficar entre o min e o maximo destes dois valores
    return Math.floor(valor)//arrendondou para baixo

}

let opcoes = 0
while(opcoes != -1){
    opcoes = RealizandoRandoEmjs(-1, 10)//os valores sao setados aqui se chego nisso ta indo bem
    console.log(`Poco escolhida foi ${opcoes}`)//aspas da seta do boi morto
}
console.log("que confusao esta funcao random ate a proxima ") */

/* 
/* 
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial!
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!') */ 


/* 
 let contador = 1
while(contador <=10){
    console.log(`contador = ${contador}`)
    contador++



} 
for(let i =1; i<=10 ; i++) 
{
    console.log( `o valor de i = ${i} ` )
    
}
 */