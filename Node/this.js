// console.log(this ===module.exports)
// console.log(this===exports)

// function logThis(){
//     console.log(this ===module.exports)
//     console.log(this===exports)
//     //O THIS AQUI DENTRO VAI APONTAR PARA O GLOBAl
// }

// logThis()

//mas se a funcao for arow ela vai apontar para o module exports
const arowFunk =()=>{
  //  console.log(this ===module.exports)
   // console.log(this===exports)
    console.log(this===global)

}
arowFunk()