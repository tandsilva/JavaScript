/*  class Pessoa{

    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome eh ${this.nome}`)


    }
 }
 const p1 = new Pessoa('tomas')
 p1.falar() */

 const criarPessoa = nome =>{
    return{
        falar:()=> console.log(`meu nome e ${nome}`)
    }
 }

p2 = criarPessoa('tobias')
p2.falar()




