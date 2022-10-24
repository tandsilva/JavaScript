 
 /* const sequencia = {
    _valor:1,
    get valor(){return this._valor++ },
    set valor(valor)
} */
 const cadastro = {
    _Id: 1,//pela convencao o anderline e importante

    get Id() { return this._Id++},//usei uma forma de incrementar o id para ficar mais facil de entender
    //set Id(Id){ this._valor = _valor} setando o id para este valor
    //ou aplicando uma condicao para para que este valor seja retornado 
    set Id(Id){
     if(Id > this._Id){
        this._Id =Id
     }

    }
} 

//console.log(cadastro.Id,cadastro.Id)
cadastro.Id = 10

console.log(cadastro.Id,cadastro.Id)