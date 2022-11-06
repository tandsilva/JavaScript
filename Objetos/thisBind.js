/* const pessoa = {

 saudacao:'bom dia' ,  
    falar(){
        console.log(this.saudacao)
}
}
pessoa.falar()

/* const teste = pessoa.falar
falar()//conflito entre paradigmas nao pode ser feito assim


 */

//forma correta

//const falarDepessoa = pessoa.falar.bind(pessoa)
//falarDepessoa()// observe que o objeto foi referenciado */

// outra maneira de usar o bind 


function Carro(){
    this.km = 0
     //const self = this //desta forma voce trava o this para ele nao apontar para outro lugar
    setInterval(function(){
        this.km++//substitui por selph
        console.log(this.km)//substitui por selph
    }.bind(this),1000);//nesta linha eu travei o this


}
new Carro