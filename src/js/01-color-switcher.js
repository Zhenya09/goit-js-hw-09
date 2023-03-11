const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')
const body = document.body

let intervalId

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor()
    body.style.backgroundColor = randomColor
}

function startBackgroundChange() {
    intervalId = setInterval(changeBackgroundColor, 1000)
}

function stopBackgroundChange() {
    clearInterval(intervalId)
}

startButton.addEventListener('click', startBackgroundChange);
stopButton.addEventListener('click', stopBackgroundChange)