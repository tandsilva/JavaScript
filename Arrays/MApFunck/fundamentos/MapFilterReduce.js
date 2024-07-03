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

const adicionaDezPorcento = (company )=>{
    company.marquetValue = company.marquetValue +(company.marquetValue/10)
    return company
}




//esse trecho, você está aplicando a função adicionaDezPorcento a cada elemento do array companias. Vamos detalhar passo a passo o que está acontecendo:
//const ValorEmpresaAntigas = companias.map(adicionaDezPorcento)
const UsandoFilter =(company)=> company.fundacao <1990
const usandoReduce =(acc,company)=>acc+company.marquetValue



const recebetudo = companias.map(adicionaDezPorcento)
    .map(adicionaDezPorcento)
    .filter(UsandoFilter) 
    .reduce(usandoReduce,0)

console.log(recebetudo)