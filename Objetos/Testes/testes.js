// const carros =['omega','jipe','fusca','ferrari','porche']
// // const venda =10
// // const comicao =10
// const valor=(venda,comicao)=>{return venda+comicao}

// console.log(valor(2,3))


// carros.forEach(element => {


//     console.log(element,valor(50,100))
// })


       

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor//para tratar o booleano o que der ele vai dar o contrario
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
    console.log(inverso(false))