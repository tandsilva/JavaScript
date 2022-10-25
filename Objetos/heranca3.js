const pai ={nome:'Mausetung',corCabelo:'preto'}

const filha1 = Object.create(pai)

filha1.nome ='Ana'

console.log(`A cor do cabelo eh ${filha1.corCabelo}`)

const filha2 = Object.create(pai,{nome:{value:'Bia',writable:false,enumerable:true}})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)




/* console.log(Object.keys(filha1))
for (let key in filha2){
    console.log(key)
} */

for(let key in filha2){
    //hasOwnProperty tras os atributos do proprio objeto
    filha2.hasOwnProperty(key)?
    console.log(key): console.log(`por heranca ${key}`)
} 