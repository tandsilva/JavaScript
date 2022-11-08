const alunos=[
    {nome:'Gabriele Piroquinha',nota:7.3,bolsista: false},
    {nome:'Serpentino',nota:9.2,bolsista: true},    
    {nome:'Adolfito',nota:9.8,bolsista: false},
    {nome:'Aaureliano Macarrao',nota:8.7,bolsista: false}
]       
    const todosBolsistas = (resultado,bolsista) =>resultado&&bolsista

   // console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))


    const algunsBolsistas =(resultado,bolsista)=>resultado||bolsista
    console.log(alunos.map(a=>a.bolsista).reduce(algunsBolsistas)) 


  Array.prototype.reduceCaseiro = function(callback,valorInicial){
    const indiceInicial = valorInicial ?0:1//const caixaTernaria = nota => nota >=7 ? 'aprovado':'reprovado'
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i<this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
  }

const soma =(total,valor)=>total+valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma,10))