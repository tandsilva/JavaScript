const nome ='Rebeca';

const template = `Olá, ${nome}!`//${} é uma variavel que vai ser substituida pelo valor da variavel nome

console.log(template.replace(/\$\{nome\}/g, nome))//g é para substituir todas as ocorrencias da variavel nome
console.log(_.padStart(nome, 10))//adiciona espaços a esquerda
const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';// expected output: "2034399002125581"
const last4Digits = fullNumber.slice(-4); // expected output: "1981"
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');// expected output: "OLÁ, REBECCA!"

console.log(maskedNumber);
// expected output: "************5581"
console.log(_.padEnd(nome, 10))//adiciona espaços a direita
console.log(_.padStart(nome, 10, '-'))//adiciona espaços a esquerda e com caracter especificado
console.log(_.padEnd(nome, 10, '-'))//adiciona espaços a direita e com caracter especificado
console.log(`1+1 = ${1+1}`)//substitui a variavel 1+1 por 2 as aspas sao diferentes

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)