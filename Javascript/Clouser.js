const x = 'gRobal'//observa que mesmo sendo grobalr ele vai chamar o que esta dentro da funcao pela forma que foi chamada

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro

}

const minhaFuncao = fora()
console.log(minhaFuncao())//o valor de x sera local

//o