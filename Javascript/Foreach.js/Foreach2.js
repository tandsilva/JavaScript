//aqui vamos criar forEach caseiro

//prototipo nosso for each em cima do arraya
Array.prototype.forEach2=function(callback){
    for(let i = 0;i<=this.length;i++){
        callback(this[i],i,this)//vai retornar o valor atual ,o indice e o array completo
    }
}
const aprovados = ['Buzenilda','Cornelios','Manguaca','Soraya55']
//dentro do for it tem um laco for 
//vai percorrer a lista e atribuir 1 para cada item da lista 
//baseado no codigo dentro do broco hahahahaha linha 6
aprovados.forEach(function(nome ,indice,array){
   console.log(`${indice +1}) ${nome} `) 
   console.log(array) 

})