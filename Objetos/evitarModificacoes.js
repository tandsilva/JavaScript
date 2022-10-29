//Object.preventExtensions


const produto = Object.preventExtensions({
    nome:'la_ele',preco:1.99,tag:'promocao'

})

console.log('Extencivel:',Object.isExtensible(produto))
produto.nome ='Borracha'//o atributo pode ser alterado 
produto.descricao = 'borracha escolar'//vai dar erro nao vai adicional este atributo ao objeto

delete produto.tag//deletar o atributo da classe vai normal
console.log(produto)

//object.seal
const pessoa = {
    nome:'Juliana',idade:35

}
Object.seal(pessoa)//nao acrecenta nem exclui atributos 
//mas os valores dos atributos poden ser alterados


//Object.freeze = selado +valores constantes 
//ou seja nao lhe sera dada autoridade para manipular o objeto