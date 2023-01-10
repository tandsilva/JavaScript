//eh uma funcao com for it dentro para validar se eh inserido um valor 
//e juntar  a matriz
function real(partes,...valores){
    const resultado=[]

    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        
        //vai reconstruir a string de forma correta
        //vai coverter valor para valores
        resultado.push(partes[indice],valor)//eh como se ele ajuntace como em uma matriz



    })
    //todos os elementos da array resultado sera juntado
    return resultado.join('')

}
const preco =29.9

const precoParcela =11
console.log(real`1 de ${preco} ou 3x de ${precoParcela}`)
