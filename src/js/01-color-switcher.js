const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')
const body = document.body

let intervalId
let isChanging = false

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor()
    body.style.backgroundColor = randomColor
}

function startBackgroundChange() {
    if (!isChanging) {
        isChanging = true
    intervalId = setInterval(changeBackgroundColor, 1000)
     }
    }

function stopBackgroundChange() {
    clearInterval(intervalId)
    isChanging = false
}

startButton.addEventListener('click', startBackgroundChange);
stopButton.addEventListener('click', stopBackgroundChange)