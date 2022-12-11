//se quiser usar novas instancia tera de criar uma factory para isso
module.exports =() =>{
    return {
        valor: 1,
        inc(){
            this.valor++ 
        }
    }
}