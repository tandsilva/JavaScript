//esta é a forma antiga 
/* let dobro =function (a){
    return 2*a
} */

//ja esta éa funcao arow (lembrar que ela sempre devera ser anexada a uma variavel)
 
// pode ser feito desta forma 
dobro = (a) =>{
    return 2*a
}
console.log(dobro(3))
//ou assim lembrando que esta forma é para funçoes de uma linha (o retun esta implicito obviamente esperado)
dobro = a => 2*a
