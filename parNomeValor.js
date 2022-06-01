const saudacao = 'opa'//contexto léxico 1 //onde primeiramente foi declarada o primeiro contexto da variavel

function exec(){
const saudacao = 'falaaa'//contexto léxico 2 escopo difernte do 1 é local da funcao
return saudacao

}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123

        
             }
}