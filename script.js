function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

document.querySelector("#modal a")
    .addEventListener("click", onOff)