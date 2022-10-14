//estrategia 1 para gerar um valor padrao

function vaisomartudinho(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1       

return a+b+c

}
console.log(vaisomartudinho(),vaisomartudinho(3),vaisomartudinho(1,2,3),vaisomartudinho(0,0,0))

//estrategia 2 ,3,4

function soma2(a,b,c){
    a =  a != undefined ? a:1 // se a for indefinido eçle vai assumir o valor de 1
    b = 1 in arguments ? b :1 // se b tiver algun conteudo em b pegue o valor de b senao pegue o padro que e 1
    c = isNaN(c) ?1:c //se for um numero aceita se nao ela retorna um valor padrao
}