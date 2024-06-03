let p =document.querySelector("p")//pegou do paragrafo lado html
let input =document.querySelector('input')
let number =0;
let cron;
let h1 = document.querySelector('h1')
function inicio(){
    cron = setInterval(function(){
        number++
        h1.innerHTML =number
    },1000)
}