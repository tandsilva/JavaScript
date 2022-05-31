const escola = "Cod3r";
console.log(escola.toString())
console.log(escola.charAt(4))//retorna o caracter da posição 4
console.log(escola.charCodeAt(3))//retorna o valor da tabela ascii do caracter da posição 3
 console.log(escola.indexOf('3'))//retorna a posição do caracter 3
 console.log(escola.substring(1))//retorna a partir da posição 1
console.log(escola.substring(0,3))//retorna a partir da posição 0 e até a posição 3 
console.log('Escola '.concat(escola).concat("!"))//concatena as strings
console.log(escola.replace(3, 'e'))//substitui o caracter 3 por e
console.log('Ana,Maria,Pedro'.split(','))//transforma a string em um array