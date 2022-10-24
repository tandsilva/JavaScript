//const a =1 , b = 2 , c= 'texto'

const obj2 = {a:a=1}//declara na hora 
//const obj1 ={a,b,c}//uma forma nova de criar objeto  mas precisa ser criado antes

console.log(obj2)


const nomeAttr = 'nota' , valorAttr =7.87

const obj3 = {}
obj3[nomeAttr] =valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}//forma reduzida
console.log(obj4)


const obj5 ={
    //modo antigo
    funcao:function(){

    },
    //modo novo
    funcaoDomeninao(){
        //.....
    }


}
console.log(obj5)