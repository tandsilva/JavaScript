const  minhaListaDeCoisas =[1,2,3,45,6,]
//adicionando itens para o aray
minhaListaDeCoisas.push('robo')

console.log(minhaListaDeCoisas)
//ver quantidade de itens para array
console.log(minhaListaDeCoisas.length)


//sort  vai organizar em ordem alfabetica

minhaListaDeCoisas.sort()
console.log(minhaListaDeCoisas)

// delete ,ele apaga mas não sobrepoem a posicao
delete minhaListaDeCoisas[0]
console.log(minhaListaDeCoisas)

//every realiza uma verificao que representaria o & se um nao for verdade retornara false

const users =[
    {
        name:'Thiago',
        age: 20
    },
    {
        name:'Maria',
        age: 20
    }
]

console.log(users.every(user => user.age === 20))

//some eh equivalento ao ou ,Ou seja se um for verdadeiro retornara true 

console.log(users.some(user => user.age === 20))

