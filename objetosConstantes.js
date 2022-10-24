
//o o bjeto pessoa esta por exemplo no end 123 da memoria ,os atributos poden ser alterados

//pessoa --> 123 --> {...}

const pessoa ={nome: 'joao'}

pessoa.nome ='maria'



console.log(pessoa)

//pessoa = {nome: 'xicaona'}//vai dar erro porque nao se pode criar duas consytantes iguais
Object.freeze(pessoa)//trava o objeto que nao pode ser mexido
const veiculo = Object.freeze({nome:paulo})//e ja travo desde o principio
pessoa.nome = 'Marata'//nao sera alterado porque esta congelado Freeeeeeeeesiiiiiiiiiiiiii