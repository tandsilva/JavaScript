function soma(y,x){
    return X+y
}//funcao comum e vista por todo escopo do codigo e é carregada primeiro


const sub = function (x,y){
 return x-y
}//so sera reconhecida daqui para baixo

const mult = function mult ( z,u){
    return  z * u
}

console.log(mult(8,7))//sempre passa o nome certo no caso aqui o ultimo tipo mult
