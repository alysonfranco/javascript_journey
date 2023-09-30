
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count++
    countEl.innerHTML = count
    console.log("clicked");
}
