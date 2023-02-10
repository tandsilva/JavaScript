//se um objeto ja estiver sido criado ele retornara sempre a mesma instancia
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//se quiser usar novas instancia tera de criar uma factory para isso
const contadorC = require('./InstanciaNova')()//dentro de instancia nova
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)



contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)

//cpf

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// A function to validate the CPF number
const validateCPF = (cpf) => {
  let sum = 0;
  let rest;
  
  if (cpf === '00000000000') return false;

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  
  if ((rest === 10) || (rest === 11))  rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  
  if ((rest === 10) || (rest === 11))  rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  
  return true;
}

// Route to handle the POST request
app.post('/validate', (req, res) => {
  const cpf = req.body.cpf;
  const isValid = validateCPF(cpf);

  res.status(200).send({
    result: isValid
  });
});

app.listen(3000, () => {
  console.log('CPF validation API running on port 3000');
});
