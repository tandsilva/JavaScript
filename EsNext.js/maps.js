const tecnologias = new Map();

    tecnologias.set('react',{ framework:false })

    console.log(tecnologias.get('react').framework)



const chavesVariadas =new Map([
    [function (){},'Funcao'],[{},'objeto'],[123,'numero'],]) 

    chavesVariadas.forEach((vl,ch)=>{
        console.log(ch,vl)
    })

    console.log(chavesVariadas.has(123))
    chavesVariadas.delete(123)


    console.log(chavesVariadas.has(123))

    console.log(chavesVariadas.size)
    chavesVariadas.set(123,'a')
    chavesVariadas.set(123,'b')
    console.log(chavesVariadas)