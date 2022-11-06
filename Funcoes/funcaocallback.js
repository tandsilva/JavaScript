const fabricantes = ["Mercedes","Audi","BMW"]

function mostrarCarro(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

//fabricantes.forEach(mostrarCarro)
fabricantes.forEach(function(a){
    console.log(a)//para cada elemto dentro do arraiá  ele vai chamar FUNCAO
})
    

//e se fosse muma funcao arow seria assim
//fabricantes.foreach(fabricante => console.log(fabricante))
