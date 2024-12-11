var prompt = require("prompt-sync")()

function guess(guessedNumber)
{
    var randomNumber = Math.floor(Math.random()*5)+1
    if(randomNumber==guessedNumber){
        console.log("You guessed right!")
    }
    else{
        console.log("Your guess is wrong, Generated random number is: " + randomNumber)
    }
}

var guessedNumber = prompt()
guess(guessedNumber)