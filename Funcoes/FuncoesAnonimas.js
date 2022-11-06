const soma = function(x ,y){
    return x + y

}
 
const imprimirResultado = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}
    imprimirResultado(3,4)//pode ser feito deste jeito 
    imprimirResultado(3,4,soma)//referenciando assim fica mais facil
    //ou seja a  funcao que na verdade foi criada para somar agora tem sua operacao alterada
    imprimirResultado(3,4,function(x,y){
        return x-y
    })


    imprimirResultado(3,4,(x,y)=>x*y)//passando uma funcao arow dentro da funcao
    