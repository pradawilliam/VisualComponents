import Fetch from "../fetch/fetch-wrapper.js"

const fetch = new Fetch()

function changeColor(color) {
    document.querySelector("button-component").backgroundColor = color
}

function setDimensions() {
    const height = document.querySelector("#widthInput").value
    const width = document.querySelector("#widthInput").value
    if (height.length === 0 || width.length === 0) {
        alert("width and/or height missing.")
        return
    }
    const button = document.querySelector("button-component")
    button.width = width
    button.height = height
}

function setPosition() {
    const left = document.querySelector("#leftInput").value
    const top = document.querySelector("#topInput").value
    if (left.length === 0 || top.length === 0) {
        alert("left and/or top missing.")
        return
    }
    const button = document.querySelector("button-component")
    button.left = left
    button.top = top
}

document.querySelector("#originalColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#skyColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#limeColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#setDimensionBtn").addEventListener("click", setDimensions)
document.querySelector("#setPositionBtn").addEventListener("click", setPosition)
