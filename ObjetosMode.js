//usando a notacao literal
const obj1 = {}
console.log(obj1)
console.log(typeof Object, typeof new Object)
//classico do js
const obj2 = new Object
    console .log(obj2)


//Funcao construtora

function Produto(nome , preco, desc){
    //o unico atributo publico e o nome o preco e o desconto estao 
    //esto encapsulados dentro da funcao
    this.nome = nome
    this.getPrecoComDesconto=()=>{
        return preco * (1-desc)
    }


}
const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('NoteBroca',2988,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())
