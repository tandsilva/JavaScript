function tratarErro(erro){


    throw new Error('perdeu seu dinheiro babaca');
    //voce pode retornar ate um objeto com comentarios mais expecificos
    //throw {
   //     nome: erro.name,
     //   msg: erro.message,
   //     date: new Date
  //  }mas para buscar isso tenq se filtrar na busca
}



function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErro(e);
    }finally//sempre ira trazer esta info
    {
        console.log('final');
    }
}//esta funcao tem como objetivo converter o nome do objeto em maiusculo e imprimir o nome gritando


const obj = { nome: 'Pedro' };//vai dar erro 
imprimirNomeGritando(obj);//o que se observa é  que quando ele tenta imprimir a funcao nomeGritando ela falha e ele entra na tratativa do erro 