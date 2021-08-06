import Fetch from "../fetch/fetch-wrapper.js"

const fetch = new Fetch()

async function reflection1() {
    const response = await fetch.doPost("holaGente1")
    document.querySelector("#hola1").innerHTML = response.msg
}

async function reflection2() {
  const response = await fetch.doPost("holaGente2")
  document.querySelector("#hola2").innerHTML = response.msg
}

async function reflection3() {
  const response = await fetch.doPost("holaGente3")
  document.querySelector("#hola3").innerHTML = response.msg
}

document.querySelector("#hiReflec1").addEventListener("click", reflection1)
document.querySelector("#hiReflec2").addEventListener("click", reflection2)
document.querySelector("#hiReflec3").addEventListener("click", reflection3)
  