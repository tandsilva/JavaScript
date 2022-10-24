const pessoa ={
    nome:'Rebeca',
    idade: 2,
    peso: 13

}
console.log(Object.keys(pessoa))//trouxe os atributos da classe nome ,idade, peso

console.log(Object.values(pessoa))//traz o valor dos atributos rebeca ,2,13

console.log(Object.entries(pessoa))//vai trazer tudo separado poder ser bom se estiver confuso

/* 
Object.entries(pessoa).forEach(e=>{
    console.log(` ${e[0]}: ${e[1]}`)
})

 */

//mais intuitivo
Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}:${valor}`)
})
//cuida para nao escrever properties
//ele adicionaou um atribto a classe
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable :true,
    writable: false,
    value:'1/01/2019'


})
console.log(pessoa.dataNascimento)

//funcao assign 

const dest ={ a:1}
const obj1 = {b:2}
const obj2 ={c:3,a:4}
const obj3 = Object.assign(dest,obj1,obj2)//vai concatenar os atributos do metodo 

console.log(dest)




