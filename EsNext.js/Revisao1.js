//destruction



// const [l,e, ...tras]="Poba"

// console.log(l,e,tras)

const [x, ,y ]=[1,2,3]
console.log(x,y)


const {idade: i,nome} = {nome:'Ana',idade:9}

console.log(i,nome)

//arrow funk
//funcao arrow sempre sera anonima 
const soma =(a,b)=>a+b
//se tiver chaves tera que obrigartoriamente ter um return 
console.log(soma(2,3))
//o this na funcao arrow sempre sera local


const local =()=>console.log(this === exports)

//uma funcao criada para retornar um valor fixo mesmo mesmo que nao seja digitado nada 

function log (texto ='Node'){
    console.log(texto)
}

log('sou mais forte')


//operador Rest

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)//para cada numero adicionada em n vai somar com a variavel total

    return total


}

console.log(total(2,3,4,5))
//objetos


const obj ={a:1,b:2,c:3}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

const nome1 = 'carla'

const pessoas = {
    nome1,
    ola(){
        return 'Oi gente!'
    }
}

console.log(pessoas.nome1,pessoas.ola())
//class um exemplo de heranca 
class Animal {}

class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }

}
console.log(new Cachorro().falar())





