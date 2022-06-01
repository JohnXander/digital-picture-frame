const imgLocation = document.getElementById("location")
const imgPicture = document.getElementById("image")
const imgDate = document.getElementById("date")
const btn = document.getElementById("btn")



fetch("./pictures.json")
    .then(resp => resp.json())
    .then(data => getPictures(data))

const getPictures = (data) => {
    const randomIdx = Math.floor(Math.random() * data.pictures.length)
    imgLocation.innerHTML = data.pictures[randomIdx].location
    imgPicture.src = data.pictures[randomIdx].picture
    imgPicture.alt = data.pictures[randomIdx].location
    imgDate.innerHTML = data.pictures[randomIdx].date
}

console.log(getPictures())


