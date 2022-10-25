
//o prototipo do objeto criado vai apontar para funcao aula

function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID

}


const aula1 = new Aula('Bem Vindo',123)

const aula2 = new Aula('Ate Breve',456)

console.log(aula1, aula2)

 //como isso funciona em segundo plano
//...parametro spread rest concatena conjunto de parametros tudo dentro da funcao
 function novo(f,...params){
    const obj ={}//usando a notacao literal de objetos 
    obj.__proto__= f.prototype//fazer com que a funcao aponte para o prototipo
    f.apply(obj)//chamar a funcao apply desta fucao que passei como parametro
    //para o metodo novo
 }