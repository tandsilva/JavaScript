/* //todo objeto tem seu prototipo
const ferrari ={
    modelo: 'F40',
    velMax: 324

}

const volvo={
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__) 
console.log(ferrari.__proto__=== Object.prototype)
 */


Object.prototype.bisavo ='superForca'
const avo ={geneticaAvo:'azuis'}
const pai = {__proto__:avo,geneticaPai:'maosFracas'}
const filho ={__proto__:pai,geneticaFilho:'burro'}

console.log(filho.geneticaAvo,filho.geneticaPai,filho.geneticaFilho)



