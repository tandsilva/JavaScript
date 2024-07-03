const list = [1,2,3,4,5,6,7,8,9,10]

//ele maeia ate 4 acumulador// valor atual //index// array completo
const toma = list.reduce((acumulador,valorAtual)=>{
        
    return acumulador + valorAtual



},0)

console.log(toma)

const companias  =[
    {
        name: 'Google',
        marquetValue: 415,
        Ceo:'Aldrin Marques',
        fundacao:1975,
    },
    {
        name: 'Microsoft',
        marquetValue: 1000,
        Ceo:'Dueine Coree',
        fundacao:1887,
    },
    {
        name: 'SHX',
        marquetValue: 999,
        Ceo:'ParaLipe',
        fundacao:2012,
    }

    
]
//dentro do value vao esta os valores da lista ou objeto
const granaDosRicos = companias.reduce((acc,value)=>{
     const somatudo = value.marquetValue * value.fundacao
    return acc+somatudo
},0)

console.log(granaDosRicos)