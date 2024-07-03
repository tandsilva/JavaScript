const list = [10, 2, 5, 99, 66, 22, 55, 64, 40, 1000]


const meteor = list.filter(number => {
    if(number > 100){
        return true

    }else {

        return false

    }
})

//ou const meteor = list.filter(number => number >100)se for true ou false
console.log(meteor)



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

const newCompanies = companias.filter(valores =>{
    if(valores.marquetValue , 200 && valores.fundacao >1990)return true
    else return false
})

console.log(newCompanies)