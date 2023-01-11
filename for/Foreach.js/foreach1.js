const aprovados = ['Buzenilda','Cornelios','Manguaca','Soraya55']
//dentro do for it tem um laco for 
//vai percorrer a lista e atribuir 1 para cada item da lista 
//baseado no codigo dentro do broco hahahahaha linha 6
aprovados.forEach(function(nome ,indice,array){
   console.log(`${indice +1}) ${nome} `) 
   console.log(array) 

})


aprovados.forEach(nome=>console.log(nome))//arow funk


const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
//for off
const carros =['omega','Opala','Mustang','Jipe']

for (const iterator of carros) {
    console.log(iterator)
    
}
for (let letras of "thiago"){
    console.log(letras)
}

//for in

// for (const cont in carros) {

//    console.log(carros[cont])
 
//     }


const assuntosEcma =['map','set','promise']

//trouce o conteudo eque estava dentro do array
for(let estudo of assuntosEcma ){
    console.log(estudo)

}
//VAI TRAZER o map completo
const assuntoMap = new Map([
    ['Map',{estudado:true}],
    ['Set',{estudado:true}],
    ['Promisse',{estudado:false}]


])

for (const varrer of assuntoMap) {
    console.log(varrer)
    
}



//só  o miolo
for (let chave  of assuntoMap.keys()) {
    console.log(chave)
}

//o valor de cada atributo
for (const valor of assuntoMap.values()) {
    console.log(valor)
}

for (const [chave,valor] of assuntoMap.entries()) {
        console.log(chave,valor)
    
}
for (const [chave,valor] of assuntoMap.set('THIAGO')) {
    console.log(chave,valor)

}
const melaoSet =new Set(['a','b','c'])
for (const contador of melaoSet) {
    console.log(contador)
}
