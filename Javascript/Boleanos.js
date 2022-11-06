let variavelBoliana = false//boolean

variavelBoliana = true//boolean
variavelBoliana = 1//number'
console.log(!!variavelBoliana)//!! é o operador de negação
console.log('os verdadeiros')//AS Aulas da veia Mira se lembra dos boludo hahahaha tabela verdade
console.log(!!3)//true
console.log(!!-1)//true
console.log(!!' ')//true
console.log(!![])//true
console.log(!!{})//true
console.log(!!Infinity)//true
console.log(!!(variavelBoliana = true))//true

//Agora vamos ver os falsos
console.log('os falsos')
console.log(!!0)//false
console.log(!!'')//false
console.log(!!null)//false
console.log(!!NaN)//false not a number
console.log(!!undefined)//false
console.log(!!(variavelBoliana = false))//false
//tratando o (ou) em javascript

console.log(!!('' || null || 0 || ' '))//true pois o primeiro valor verdadeiro é o primeiro valor que foi passado ou seja se ouver um valor verdadeiro ele retorna true
console.log(!!('' || null || 0 || ' ' || 123))//true
console.log(!!('' || null || 0 || ' ' || 123 || true))//true
console.log(!!('' || null || 0 || ' ' || 123 || true || undefined))//true

console.log(!!('' || null || 0 || ' ' || 123 || true || undefined || NaN))//false



let nome = ''//string vazia 
console.log(nome || 'Desconhecido')//usou o ou para aplicar a msg (se nome for vazio ele retorna Desconhecido)
console.log(nome || 'Desconhecido' || 123)//usou o ou para aplicar a msg (se nome for vazio ele retorna Desconhecido)
