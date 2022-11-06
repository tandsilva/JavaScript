const macacoArraya =[1,2,3,4,5,6,7,8,9,10]
 
for (let i in macacoArraya ){
    if(i==5){
        break//o pai dele é for o if nao manda nele

       
    }
   // console.log(`${i} = ${macacoArraya[i]}`)
} 


externo: for(a in macacoArraya){
    for(b in macacoArraya){
        if(a==2 && b==3) break externo
            console.log(`par igual ${a},${b}`)
        
    }
}