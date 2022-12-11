//se um objeto ja estiver sido criado ele retornara sempre a mesma instancia
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//se quiser usar novas instancia tera de criar uma factory para isso
const contadorC = require('./InstanciaNova')()//dentro de instancia nova
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)



contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)