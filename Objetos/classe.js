class Lancamentos{
    constructor(nome = 'generico',valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.planilha =[]
        
    }
    //que vai receber os parametros e concatenar em um arraya 
    addlancamentos(...planilha){
        planilha.forEach(l =>this.planilha.push(l))    
    }
    sumario(){
      let valorConsolidado =0
      this.planilha.forEach(l=>{
        valorConsolidado+=l.valor
      }) 
      return valorConsolidado
    }

}

const salario = new Lancamentos('salario',45000)
const contaDeluz =new Lancamentos('luz',-220)
const contas = new CicloFinanceiro(5,2022)//aqui ele ativou a heranca para poder usar o metodo os valores aplicados sao inuteis 5,2022
contas.addlancamentos(salario,contaDeluz)//agora que contas ja herdou o metodo ele usa o addlancamentos e sumario
console.log(contas.sumario())
//console.log(contas)