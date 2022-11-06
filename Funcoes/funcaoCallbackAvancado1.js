//sem callback

const notas=[7.7,6.5,5.2,8.9,3.6,7.1,9.0]
let notasBaixas1=[]


for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
  
    }
}
console.log(notasBaixas1)

//com callback

notasBaixas2 = notas.filter(function(nota){
    return nota<7
})
console.log(notasBaixas2)


const notasMenorQueSete= nota =>nota < 7
const notasbaixas3 = notas.filter(notasMenorQueSete)
console.log(notasbaixas3)


/* document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu ')
}
 */