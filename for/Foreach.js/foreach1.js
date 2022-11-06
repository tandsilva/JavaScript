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