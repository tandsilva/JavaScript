const imprimirResultado =function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honrra')
            break
        case 8: case 7:
            console.log('aprovado')
            break
            
        case 6: case 5: case 4:
            console.log('recuperacao')
            break
        case 3: case 2: case 1: case 0:

            console.log('reprovadoS')
            break
            console.log('nota invalida')


    }
} 
imprimirResultado(10)