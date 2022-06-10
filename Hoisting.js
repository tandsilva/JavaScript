console.log('a = ',a)
var a =2//independente de onde a variavel foi declarada ela sera içada no escopo global
let b = 2//variaveis do tipo let nao serao icadas no escopo global
console.log('a = ',a)


//outro exemplo de hoisting

var t = 2
console.log(t)//2
function qualquer(){
    console.log(t)//indefinido ou seja vai bugar atencao nisto
    var t = 3
    console.log(t)//3
  
}
qualquer()

//outro exemplo de hoisting

function getValor(){
    function retornaValor(){
        return 1;
    }//
 retornaValor();
 function retornaValor(){
     return 2;
 }//o valor dois foi icado no escopo global se tornando atualizado
}
var resultado = getValor();
console.log(resultado)//2