let randomNumber = Math.floor(Math.random()*100 +1)
const button = document.getElementById("button")
const input = document.getElementById("guess")
const guessSlot = document.getElementById("guess-slot")
const lowHigh = document.getElementById("low-high")
const startOver = document.querySelector(".result-paras")
const remainingGuess = document.querySelector(".remaining-guess")

const p =document.createElement("button");

let prevGuess=[]
let numberOfGuesses = 1

let playGame = true

if(playGame){
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess = parseInt(input.value)
        console.log(guess)
        validateGuess(guess)
    })
}

const validateGuess=(guess)=>{
    if(isNaN(guess)){
        alert("Please enter a valid number...!!!")
    }else if(guess<1){
        alert("Please enter a number greater than 1...!!!")
    }else if(guess>100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numberOfGuesses===10){
            displayGuess(guess)
            displayMessage(`Game Over. The number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess=(guess)=>{
    if(randomNumber===guess){
        displayMessage("You Won...!!!")
        endGame();
    }else if(guess<randomNumber){
        displayMessage("number is TOOOOO Low")
    }else if(guess>randomNumber){
        displayMessage("number is TOOOOO High")
    }
}

const displayGuess=(guess)=>{
    input.value=""
    guessSlot.innerHTML +=`${guess} `
    numberOfGuesses++
    console.log(numberOfGuesses)
    remainingGuess.innerHTML =`${11- numberOfGuesses}`
}

const displayMessage=(message)=>{
    lowHigh.innerHTML = `${message}`
}


const newGame=()=>{
    const newGame = document.querySelector("#newGame")
    newGame.addEventListener("click",()=>{
        numberOfGuesses=1
        randomNumber = Math.floor(Math.random()*100 +1)
        prevGuess=[]
        guessSlot.innerHTML=""
        remainingGuess.innerHTML=`${11-numberOfGuesses}`
        input.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame=true
    })
}

const endGame=()=>{
    input.value=""
    input.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start new Game!</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}



