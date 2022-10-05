
//foi criada uma funcao para 
Number.prototype.entre = function(inicio,fim){
return this >= inicio && this <= fim
}


const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('quadro de honrra')
    }else if(nota.entre(7,8.99)){
        console('aprovado')
    }else if (nota.entre(4,6.99)){
        console.log('recuperacao')
    }else if(nota.entre(0,3,99)){
        console.log('reprovado')
    }else{
        console.log('nota invalida')
    }

    console.log('Fim')
}
imprimirResultado(10)
