function MeuObjeto(){

}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//quando vc cria um obj apartir de uma funcao  construtora usando new
//o prototipo que voce criou aponta para funcao que voce criou ponto prototype
//funcao meu obj
console.log(obj1.__proto__===obj2.__proto__)

console.log(MeuObjeto.prototype ===obj1.__proto__)

 MeuObjeto.prototype.nome ='Anonimo'//qualquer objeto que for criado apartir desta funcao construtora 
 //tera o atributo nome
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia ! Meu nome eh ${this.nome}` )
}

obj1.falar()

obj2.nome ='Emagneras'

obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome = 'Obj3'//atraves da prototipacao ja herdou o falar e o nome
obj3.falar()