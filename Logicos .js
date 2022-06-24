function compras(trabalho1,trabalho2){
 const compraSorvete = trabalho1||trabalho2 
 const comprarTv50 = trabalho1 && trabalho2
 //const comprarTv32 = !!(trabalho1 ^ trabalho2)verificao bit a bit
 const comprarTv32 = trabalho1 != trabalho2//ou exclusivo
 const manterSaudavel = !compraSorvete//operador unario
return{compraSorvete,comprarTv50,comprarTv32,manterSaudavel}
}