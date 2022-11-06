function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let veleocidadeAtual = 0

         

//metodo publico

this.acelerar = function(){
    if(veleocidadeAtual + delta <= velocidadeMaxima ){
        veleocidadeAtual += delta
    }else {
        veleocidadeAtual = velocidadeMaxima
    }
    //metodo publico
}
   


this.getVeleocidadeAtual = function(){
        return veleocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()

console.log(uno.getVeleocidadeAtual())

const ferrari = new Carro(350,20)//apartir desta instaciacao a funcao e tranformada em objeto 
ferrari.acelerar()
console.log(ferrari.getVeleocidadeAtual())


