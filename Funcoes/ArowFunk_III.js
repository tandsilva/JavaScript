let comparaComThis = function(param){
        console.log(this === param)
}

comparaComThis(global)//isto esta sendo realizado no escopo global

const obj ={}
comparaComThis = comparaComThis.bind(obj)//faca deste jeito
comparaComThis(global)
comparaComThis(obj)


let comparaComThisr =param =>console.log(this ===param )
comparaComThisr(global)
comparaComThisr(module.exports)//apontando para o modulo do node