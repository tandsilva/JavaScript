//foi criad um ojeto com um id e uma funcao que sera disparada assi m que for chamada
const sequence ={
    _id:1,
    get id(){return this._id++}
}

const produtos={}

function salvarProduto(produto){
    //eh uma verificacao se tiver id blz se nao ele recebe da =sequecia
    if(!produto.id) produto.id = sequence.id
    //se nao estiver previamente setao vai atribuir um elemento dentro de produtos
    progutos[produto.id] = produto

    return produto
}

function getProduto(id){
    //funcao apenas para retornar o id se falhar retorna o objeto vazio
    return produtos[id]||{}
}

//retornara todos os atributos do objeto produtos

 function getProdutos(){
    return Object.values(produtos)
 }

module.exports ={
    salvarProduto,getProduto,getProdutos
}
