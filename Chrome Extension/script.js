let input = document.getElementById("input-el");
let text = document.getElementById("input-text");

function saveLead() {
    text.textContent += input.value + " ";
}

let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function() {
    saveLead();
});


