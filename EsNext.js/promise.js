
//funcao que recebe dois parametros e retrona uma promessa
function falarDepois(segundo,frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //so aceita um parametro
            resolve(frase,'abc  ')
        },segundo*1000)
    })


}
//then eh uma funcao do promisse
falarDepois(3,'Brasil')
.then(frase =>frase.concat('Campeao'))
.then(Outrafrase =>console.log(Outrafrase))

.catch(TratandoErro =>console.log(TratandoErro))