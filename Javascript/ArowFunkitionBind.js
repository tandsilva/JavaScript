//como ele vai usar a funcao arow dentro do escopo da funcao fica travado o this
function metralhadora(){
    this.disparos = 0
    setInterval(()=>{
        this.disparos++
        if(this.disparos==4){
            console.log('ola')
        }
        console.log(this.disparos)
    },1000)


}

new metralhadora