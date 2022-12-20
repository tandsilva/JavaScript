const fs = require('fs')
// A string __dirname fornece o caminho do diretório do módulo atual, que também é semelhante ao path.dirname() do nome do arquivo 
const caminho  = __dirname + '/arquivo.json'
// carrega primeiro para depois liberar o conteudo
const conteudo = fs.readFileSync(caminho,'utf-8')
//console.log(conteudo)


fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// um modo de saber todo o conteudo das pastas
fs.readdir(__dirname,(err, arquivos)=>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})
