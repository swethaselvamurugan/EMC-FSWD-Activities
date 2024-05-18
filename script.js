var guess = document.getElementById("one")
var result = document.getElementById("three")
var chance = document.getElementById("four")
var chances = 3
var randomNumber = Math.floor(Math.random() * 10) + 1
if (randomNumber > 5) {
    randomNumber = randomNumber - 5
}
function check() {
    if (randomNumber == Number(guess.value)) {
        result.textContent = "You are right!"
        alert("You got is right, Congratulations!")
    }
    else {
        result.textContent = "You are wrong!"
        chances = chances - 1
        chance.textContent = "Available guesses: " + chances
        if (chances == 0) {
            alert("You lost, Generated random number is: " + randomNumber)
        }
    }
}