
//o node precisa ser instalado para usar este recurso XD
//foi adicionado um argumento para verificar se a String ("a") esta adicionada no bloco de codigo
const anonimo = process.argv.indexOf('a')!== -1
//console.log(anonimo)

//se ele receber a String entra no case 1
if (anonimo){
    process.stdout.write('Fala Anonimo \n')
    process.exit()
    //se nao voce insere o nome e ele imprimi
} else{
    process.stdout.write('informe seu nome')
    //comandos para o teclado reconhecer o a entrada das informacoes e alocar dentro da variavel nome
    process.stdin.on('data',data =>{
        const nome = data.toString().replace('\n','') 
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()

    })



}
