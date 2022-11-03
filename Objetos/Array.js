aprovados = ['simao','leleo','ana']

console.log(aprovados[0] )
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//COMO NAO declarado no aray vai aparecer undefine


//agora vou atribuir
aprovados[3]='Paulo'
//inserir uma pessoa nova no array
aprovados.push('mael')
console.log(aprovados.length)

//atribui em uma posicao que nao existia e ele entendeu e criou um espaco
//que ficara vazio
aprovados[9] = 'Eugenio'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)

console.log(aprovados)
//aprovados.sort()
console.log(aprovados)
delete aprovados[1]//a posicao ficara vazia ninguem vem pro lugar 

aprovados.splice(1,1)//o primeiro numero e para dizer onde comeca /ai quantos voce vai derruba dai para frente
aprovados.splice(1,2,'zeca Cebolera','Corcunda')//apartir do indice 1 vai excluir dois e adcicionar 2
aprovados.splice(1,0,'alfacao','repolhino')//por o segundo parametro estar zerado ele vai adicionar o que esta em string
console.log(aprovados)






