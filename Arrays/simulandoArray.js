const quaseArray = {0:'Sentopeia Humana',1:'Aureliano Garcia',2:'Chico Mendes'}

console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value: function(){
        return Object.values(this)},
        enumerable :false
    
})


console.log(quaseArray[0])



