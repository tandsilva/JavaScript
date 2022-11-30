//tres formas de exportar um aruvo para fora do escopo local

console.log(module.exports ===this)

console.log(module.exports === exports)

this.a =1//para referenciar mais de um
exports.b =2
module.exports.c=3


//sempre que for usa uma forma de exportar um objeto
//voce devera usar desta forma
module.exports = {publico: true}
