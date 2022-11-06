const obj1 = {}//objeto vazio
obj1.nome = 'Bola'//adiciona um atributo ao objeto
obj1['nome'] = 'Bola'//adiciona um atributo ao objeto
//CONSOLE.LOG(obj1)//mostra o objeto
function Obj(nome){
    this.nome = nome//adiciona um atributo ao objeto 
    this.exec= function(){
        console.log(this.nome)//mostra o atributo do objeto uma funcao para uso externo 
        //uma funcao dentro de outra 


}
const obj2 = new Obj('Torre')//cria um objeto
const obj3 = new Obj('Chumbo')//cria um objeto
console.log(obj2)//mostra o objeto
console.log(obj3)//mostra o objeto
obj3.exec()//executa a funcao totalmente maluco chamou  a funcao do objeto
}
Obj('Torre')//cria um objeto