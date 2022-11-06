 const produtos = [
    {nome:'vasinho de ceramica',preco: 2499,fragil:true} ,   
    {nome:'sansung',preco:4199 ,fragil:true} ,
    {nome:'copinho de cristal',preco: 12.49,fragil:true},
    {nome:'copo de pedreiro',preco:18.99 ,fragil: false}


]
 
console.log(produtos.filter(function(p){
    return p.preco > 2500
})) 


const caro = Objetos =>Objetos.preco>=500//Funcao de condicioanl criada 
const fragil =produto =>produto.fragil //nao precisa comparar porque soh serao retornados os verdadeiros


console.log(produtos.filter(caro))

console.log(produtos.filter(caro).filter(fragil))