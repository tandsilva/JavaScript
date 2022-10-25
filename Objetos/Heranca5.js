console.log(typeof String)//por ser uma funcao possui um prototipo
//voce pode colocar novas funcoes e prototipos dentro de string


//split quebra as letras e gera um array
//O array tem a funcao `reverse` para reverter os elementos
//join para ele juntar novamente todos os elementos na string
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}


console.log('Escola Cod3r'.reverse())//este metodo nao esta na api mas como prototipei ele aparece
//criou a funcao first para retornar a posicao 0 
//voce acessa o array ou a string dentro do prototipo atrves do this

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())//funcao first recem criada


console.log(['a','b','c'].first())
//prototipar a string
String.prototype.toString = function(){
    return 'Lascou tudo'
}

