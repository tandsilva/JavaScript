const escola = [{
    nome:'Turma M1',
    alunos:[{
        NOME:'Gustavo',
        nota:8.1
    },{

        nome:'Ana',
        nota:9.3

    }]
},{ nome:'Turma m2',
    alunos :[{
        nome:'Rebeca', 
        nota:8.9
},{
    nome:'Roberto',
    nota:7.3 

}]

}]

const getNotaDoAluno = aluno =>aluno.nota//extraindo a nota de dentro do aluno

const getNotasDaturma = turma =>turma.alunos.map(getNotaDoAluno)//extratir toda as notas da turma e vou converter o objeto do tipo aluno para pegar so a nota
const notas1 = escola.map(getNotasDaturma)//vai varrer cada uma das turmas ja que escola eh um array de turmas
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}//UMA FUNCAO CRIADA PARA CONCATENAR VARIOS ARRAYS

const notas2 = escola.flatMap(getNotasDaturma)
console.log(notas2)