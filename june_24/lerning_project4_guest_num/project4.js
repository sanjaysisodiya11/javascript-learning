const randomNumber = parseInt(Math.random()*100 + 1);
let guessField = document.querySelector("#guessField");
let subt = document.querySelector("#subt");
let Preguesses = document.querySelector(".guesses");
let remainingResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let playGame = true;

if(playGame)
{
    subt.addEventListener('click',function(e){
        e.preventDefault();
        const gussNum = parseInt(guessField.value);
        console.log(gussNum);
    })
}

function validateGuess(gussNum)
{

}

