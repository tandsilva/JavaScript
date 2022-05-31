//todo objeto em javascript é uma função ,toda classe tambem é uma função

function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3);
imprimirSoma(2);//entendera o segundo termo como indefinido
imprimirSoma(2,3,4,5,6,7,8,9);//vai somar os dois primeiros apenas
imprimirSoma();//não funciona pois não tem o primeiro parametro
//
