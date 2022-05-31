{{{{var sera = 'Sera!!!!'}}}}
console.log(sera)//mesmo fora do escopo ela sera encontrada pois ela é global porque esta fora de uma funçao


function teste(){
    var local = 123
}
console.log(local)//undefined pois a variavel local foi declarada dentro de uma funçao e nao esta fora dela POR ISSO NAO SERA LOCALIZADA




//outro exemplo de escopo
var numero = 1
{
    var numero = 2
    console.log(numero)//esta dentro do escopo e vai imprimir 2

}
console.log(numero)//esta fora do escopo e vai imprimir 1




