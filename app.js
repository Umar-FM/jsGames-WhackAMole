const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeftDisplay = document.querySelector('#time-left')
const scoreDisplay = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    //reset mole
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if (square.id == hitPosition){
            result++
            scoreDisplay.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare,500)
}

moveMole()

function countDown(){
    currentTime--
    timeLeftDisplay.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game over! Final score: ' + result)
    }
}

let countDownTimerId = setInterval(countDown,1000)