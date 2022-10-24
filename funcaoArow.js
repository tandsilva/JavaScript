/* dobro = (a) =>{
    return 2*a
}

dobro = a=> 2 *a//o retorno sera implicito
console.log(dobro(Math.PI))

ola = ()=>'ola' //este tipo de sentença so funciona para uma linha


console.log(ola())



function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
  /*       self.idade++
        console.log(self.idade)
    }/*.bind(this)*///,1000)
/* }
new Pessoa

 */ 

   //O setInterval serve para executar 
   //uma função ou instrução várias vezes 
   //em um determinado intervalo de tempo 

function Pessoa(){
    this.idade = 0
    setInterval(() =>{
    this.idade++
    console.log(this.idade)
} ,1000)
}
new Pessoa