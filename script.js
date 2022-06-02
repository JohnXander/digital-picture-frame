const imgLocation = document.getElementById("location")
const imgPicture = document.getElementById("image")
const imgDate = document.getElementById("date")
const plusBtn = document.getElementById("plusBtn")
const minusBtn = document.getElementById("minusBtn")
const startBtn = document.getElementById("startBtn")
const speedDisplay = document.getElementById("speedDisplay")

let jsSpeed = 3000
let userSpeed = 5
let interval

const getPictures = () => {
    fetch("./pictures.json")
    .then(resp => resp.json())
        .then(data => {
            const randomIdx = Math.floor(Math.random() * data.pictures.length)
            imgLocation.innerHTML = data.pictures[randomIdx].location
            imgPicture.src = data.pictures[randomIdx].picture
            imgPicture.alt = data.pictures[randomIdx].location
            imgDate.innerHTML = data.pictures[randomIdx].date
        })
}

plusBtn.addEventListener("click", () => {
    if (userSpeed < 10) {
        jsSpeed -= 500
        userSpeed++
        speedDisplay.innerHTML = userSpeed
        startBtn.innerHTML = "Resume"
        startBtn.classList.remove("unclickable")
        clearInterval(interval)
    }
})

minusBtn.addEventListener("click", () => {
    if (userSpeed > 1) {
        jsSpeed += 500
        userSpeed--
        speedDisplay.innerHTML = userSpeed
        startBtn.innerHTML = "Resume"
        startBtn.classList.remove("unclickable")
        clearInterval(interval)
    }
})

startBtn.addEventListener("click", () => {
    interval = setInterval(getPictures, jsSpeed)
    startBtn.innerHTML = "In progress..."
    startBtn.classList.add("unclickable")
})