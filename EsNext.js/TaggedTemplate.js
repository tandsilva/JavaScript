//tagged template -processa o template dentro de uma funcao

//recebera um conjunto de valores que dentro desta funcao sera um array
function tag(partes, ...valores){
     console.log(partes)
     
     console.log(valores)
    return 'Outra String'

}

const aluno = 'Thi'
const situacao = 'aprovado'
//chamou e instanciou  a funcao apenas no template  ...valores 
console.log(tag `${aluno} esta ${situacao}`)



