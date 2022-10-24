const carro = {

    velAtual:0,
    velMax:200,
    aceleraMais(delta){
        if(this.velAtual+delta <=this.velMax ){
            this.velAtual +=delta

        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax: 324//Shadowing
}
const opalao = {
    modelo :'SS',
    status(){
       return `${this.modelo}:${super.status()}`
       //ELE NAO TEM VELOCIDADE MAXIMA A FUNCAO STATUS E UMA HERANCA QUE POSSIBILITA ISSO
       //sombreando a funcao status apartir do objeto opalao
       //estou usando o super porque eu quero que ele de preferencia para o metodo opalao
    }
}

Object.setPrototypeOf(ferrari,carro)//estabeleci uma relacao entre o objeto e sua classe que eh carro
Object.setPrototypeOf(opalao,carro)
console.log(ferrari)
opalao.aceleraMais(300)
console.log(opalao.status())


ferrari.aceleraMais(300)
console.log(ferrari.status())
