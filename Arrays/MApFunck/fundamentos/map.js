// const number =[1,2,3,4,5,6,7]
// //eh fixo as posiçoes 
// const dobrar = number.map( (itens ,index,original) =>{
//     console.log(itens+'-> item')
//     console.log(index+'-> index')
//     console.log(original+'-> original')
//     const caixa = itens * 2 
//     return caixa
// })

// console.log(dobrar)


// const lista =[
//     {name:'Tutuba',vip: true},
//     {name:'Maria',vip: true},
//     {name:'Joao',vip: true},
//     {name:'Bruno',vip: false},
//     {name:'Carla',vip: true},
//     {name:'Ana',vip:  false},
//     {name:'Pirulito',vip:  true},
  
// ]

// const novaLista = lista.map( (convidados) => {
//     const newUser ={
//         name: convidados.name,
//         CorDaPulseira: convidados.vip ? 'black': 'green'
//     }

//     return newUser


// })

// console.log(novaLista)


const lista =[
    {name:'Tutuba',Sentence: true},
    {name:'Maria',Sentence: true},
    {name:'Joao',setence: true},
    {name:'Bruno',setence: false},
    {name:'Carla',setence: true},
    {name:'Ana',setence:  false},
    {name:'Pirulito',setence:  true},
  
]

const nomeAlunos = lista.map((className)=>{
    const media = {
        name: className.name,
        setence: className.setence? 'Aprovado': 'Reprovado'
  }  
 return media   
})


console.log(nomeAlunos)