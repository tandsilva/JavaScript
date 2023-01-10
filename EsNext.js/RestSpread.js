//explicando melhor o conceito do spread ...rest

//usar spread com objeto

const funcionario = { nome:'Maria' ,salario:12348.99}
const clone ={ ativo:true, ...funcionario}
console.log(clone)


//usar spread com array

const grupoA =['Joao','Pedro','Matheus']
const grupoFinal =['Maria', ...grupoA,'Rafael']
console.log(grupoFinal)




