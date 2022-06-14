function rodatudo ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return math.floor(valor)
}

const obj = {min: 50, max: 100}
console.log(rodatudo(obj))
console.log(rodatudo({min: 50}))
console.log(rodatudo({}))//gera um valor aleatorio entre 0 e 1000
console.log(rodatudo())//vai dar error pois nao tem parametro    

//outro tipo de random
function random({min = 0 , max = 1000}){
if (min > max) [min, max] = [max, min]//se o min for maior que o max ele troca os valores
const valor = Math.random() * (max - min) + min
return math.floor(valor)  //\arredonda para baixo
}
console.log(random({min: 50, max: 100}))
console.log(random({min: 50}))
console.log(random({}))//gera um valor aleatorio entre 0 e 1000
console.log(random())//vai dar error pois nao tem parametro




