//Armazaena uma função em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3);//chamou direto pois a funçao estava atribuida a uma variavel

//funçoes arrow

const soma = (a,b) => {
    return a+b
}//usou o simbolo de flecha nova forma de funcao do javaScript
console.log(soma(2,3))//vai somar 2 e 3

//Retorno implicito

const subtraçao =(a,b) => a-b//nao precisou do return
console.log(subtraçao(2,3))//vai subtrair 2 e 3
const textoImpresso = a => console.log(a)
textoImpresso('Ola Mundo')//vai imprimir o texto
