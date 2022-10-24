//usando a notacao literal 
const objetoThiagao = {}
console.log(objetoThiagao)//forma comum de definir objeto

//Objeto em js 
console.log(typeof Object, typeof new Object)
const TesteObj = new Object
console.log(TesteObj)


//fucoes construtura 
function Produto(nome,preco,desc) {
    this.nome = nome
    this.getPrecoComdesconto = ()=>{
        return preco *(1-desc)
    }
}
  
const p1 = new Produto('caneta',7.99,0.15)
const p2 = new Produto('Notebrouks',2998.99,0.25)
console.log(p1.getPrecoComdesconto(),p2.getPrecoComdesconto())//a funcao ja pega o valor dentro da p1


//funcao factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){return(salarioBase/30)*(30-faltas)}
        

    }
}


const fconstrucao =criarFuncionario('joanildo',7980,4)
const frh = criarFuncionario('camiolonilda',11400,1)
console.log(fconstrucao.getSalario(),fconstrucao.getSalario())


//object.create

const menina = Object.create(null)
menina.nome ='ana'
console.log(menina)


//tranformando jasoo=n em obj muito usado para pegar dados de um box
const fromJasom = JSON.parse('{"info":"Sou um Jason"}')
console.log(fromJasom)
