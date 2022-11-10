/* const alunos =[
    { nome: 'Taskonis',nota:7.9},
    { nome: 'Coraline',nota:6.3},

]

const getNota = media =>media.nota//criada apenas para trazer a nota do aluno
const soma = (total,atual)=>total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length) */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
