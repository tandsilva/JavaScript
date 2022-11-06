//todo objeto em javascript é uma função ,toda classe tambem é uma função

function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3);//neste caso nao precisou do console.log pois a função ja retorna o valor
imprimirSoma(2);//entendera o segundo termo como indefinido
imprimirSoma(2,3,4,5,6,7,8,9);//vai somar os dois primeiros apenas
imprimirSoma();//não funciona pois não tem o primeiro parametro
//função com retorno
function soma(a,b=0){
    return a+b
}
console.log(soma(2,3))//vai somar 2 e 3 foi chamada a funçao soma 
console.log(soma(2))//vai somar 2 e 0
