/* 
//uma funcao de forma literal
function tomates(){

} 

//armazenar em uma variavel
 const armazenaFuncao = function(a,b){
    return(a-b)
} 

const arraya =[ function(a,b) {return a+b} , tomates ,armazenaFuncao ]//o array armazena varias funcoes
console.log(arraya[2](2,3))//OBSERVA QUE FOI PASSADA A POSICAo e cada virgula representa uma posicao


//armazenar em um atributo de um objeto
const obj ={}
obj.falar = function(){return 'opa'}
console.log(obj.falar() )

//uma forma de gatilho uma funcao que chama outra
function run(fun){
    fun()
}
run(function (){console.log('correto')})
// um  absurdo como isso funciona 
function soma(a,b){
    return function(c){
        console.log(a+b+c)

    }

} 
soma (2,3)(5)//simples assim vai mandabdo os valores tudo baguncado e ele aceita
const bagunca = soma(5)//ou pode fazer esta merda aqui oh */

// e uma funcao sem parametros aprendendo a usar uma propriedade chamada arguments que é um array do javascript
function soma(){
    let somar=0
    for(i in arguments){
        somar += arguments[i]
        
    }
    return somar
} 
console.log(soma(1.1,2.2,'concatena Isso'))