/* for(let i =1; i<=10 ; i++) 
{
    console.log (`ola ${ i} `  )

}
 */
/* 
const notas  = [5.5,8.8,6.6,9.8]
for(i = 0; i <notas.length;i++){
    console.log(`nota =  ${notas[i]}` )
}

 */
/* const caixinha = [6.5,9.8,6.6,4.4,5.2]//oque foi notado e que nao se pode errar o nome das variaveis  

for (let t in caixinha ){
console.log(t,caixinha  [t])

}
 */
const pessoa = {
    nome: 'thiago',
    sobrenome:'la ele',
    idade:1943 ,
    peso:130 

}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

/* git fetch origin master:tmp
git rebase tmp
git push origin HEAD:master
git branch -D tmp */