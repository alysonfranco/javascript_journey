let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.innerText = count;
    console.log("clicked");
}

function save() {
    let entries = count + " - ";
    saveEl.textContent += entries;
    console.log(count);
}

