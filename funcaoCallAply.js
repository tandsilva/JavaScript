function getPreco(imposto = 0,moeda='R$'){
    return `${moeda} ${this.preco *(1- this.desc)*(1+imposto)}`
}

const produto = {
    nome:'notebroca',
    preco:4589,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

const carro = {preco: 49990,desc:0.20 }
console.log(getPreco.call(carro))

console.log(getPreco.call(carro,0,50,'$'))
console.log(getPreco.apply(carro,[0,50,'$'])//no apply ele espera um arraya hahahahah array
