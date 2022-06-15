for(var i;i<10;i++){
    console.log(i);
}
 

//for com let 

for(let i;i<10;i++){
    console.log(i);
}
console.log(i);//erro pois i nao foi inicializado fora, apenas  dentro do escopo


const func = []
for(var i = 0;i<10;i++){
    func.push(function(){
        console.log(i)
    })
}
console.log(func[2])//vai imprimir 10 pois o i esta dentro do escopo da funcao
func[2]()//vai imprimir 10 pois o i esta dentro do escopo da funcao
console.log(func[8])//vai imprimir 10 pois o i esta dentro do escopo da funcao

//mesma situaçao agora com let 
const func1 = []
for(let i = 0;i<10;i++){
    func.push(function(){
        console.log(i)
    })
}
console.log(func[2])//vai imprimir 2 pois o let bloqueia por estar dentro do escopo da funcao
func1[2]()//vai imprimir 10 pois o i esta dentro do escopo da funcao
console.log(func[8])//vai imprimir 8 pois o i esta dentro do escopo da funcao
console.log(i)//erro pois i nao foi inicializado fora, apenas  dentro do escopo