
//O resulta de uma funcao reduce sempre seta passado para proxima interacao
//ele acumulador recebe os parametros da operacao e vai armazenar o que acontece vai operar com o valor da atual
//o primeiro eh o acumulador e o outro o indice atual
const alunos=[
        {nome:'Gabriele Piroquinha',nota:7.3,bolsista: false},
        {nome:'Serpentino',nota:9.2,bolsista: true},    
        {nome:'Adolfito',nota:9.8,bolsista: false},
        {nome:'Aaureliano Macarrao',nota:8.7,bolsista: true}
]       


console.log(alunos.map(a=>a.nota))//vai trazer todas as notas dos alunos apenas isso 

console.log(alunos.map(a=>a.nome))
    //O a [eh cada indice  o acumulador recene o valor 7.3 e vai somar
//com 9.2 que deu 16.5  mais 9.8 que da 26.3 + 8. que da 35 ,o 
//que acumula vai sempre juntando os valores ele concatena e vai somando
    const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
        console.log(acumulador,atual)
    return acumulador==true
},0)//posso passar um valor inicial aqui

console.log(resultado)

