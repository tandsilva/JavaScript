
const result = document.querySelector('.result')
const humanScore = document.querySelector('#humanScore')
const machineScore = document.querySelector('#machineScore')

let humanScoreNumber =0

let machineScoreNumber =0

const playHuman = (humanChoise) => {
        
        playGame(humanChoise,playMachine())
      // alert( playMachine())

}


const playMachine=()=>{
    const choices = ['Urso','Aguia','Serpente']
    const computerChoise = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoise)
    return computerChoise
}

const playGame =(human , machine )=>{
    console.log(` Humano+  ${human}     Maquina ${machine} `)
        if(human === machine){
                 result.innerHTML = 'Empate'


        }else if( ( human === 'Urso'&& machine==='aguia')||
                  ( human ==='Aguia'&& machine ==='Serpente')||
                  ( human ==='Serpente'&& machine ==='Urso')){

                    humanScoreNumber++
                    humanScore.innerHTML = humanScoreNumber
                    result.innerHTML = 'Você ganhou seu bicho eh mais forte'
               

            



        }else{
                machineScoreNumber++
                machineScore.innerHTML = humanScoreNumber
                  result.innerHTML = 'Você perdeu o bicho inimgo eh mais forte'
        }
    




}

































    // var inputField = document.getElementById('inputUrso');
    // inputField.style.display = 'block'; // Mostra o input

    // // Adiciona um event listener para capturar o valor do input quando o usuário digitar e pressionar Enter
    // inputField.addEventListener('change', function() {
    //     alert('Valor do input: ' + inputField.value);
    // });

    // return console.log(inputField); // Mostra o elemento input no console