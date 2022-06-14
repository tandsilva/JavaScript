const valores = [7.7, 8.9, 6.3, 9.2]//cria um array
console.log(valores[0], valores[3])//mostra o primeiro e o ultimo valor do array
console.log(valores[4])//mostra o valor que não existe
valores[4] = 10//adiciona um valor no array
console.log(valores)
valores.push//adiciona um valor no final do array
valores.pop//remove o ultimo valor do array
valores.push({id: 3}, false, null, 'teste')//adiciona um objeto no array ele adiciona tudo misturado nao importa o tipo se manda vai tudo cagado
delete valores[0]//deleta o valor do array


function receberNomeDoMes(numero) {  
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']  
 return mapeamento[numero]; }
receberNomeDoMes(1)
console.log(receberNomeDoMes(1))//puta rolo  criou uma array dentro da funcao para mapear o numero do mes