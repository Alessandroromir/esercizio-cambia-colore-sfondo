//Definire le variabili
let colors = ["blueviolet", "steelblue"];
let btn = document.getElementById("btn")
let color = document.getElementById("color")
let currentIndex = 0;


//Dichiarare le funzioni

function changeColor() {
    color.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;}


//Eseguire le funzioni

btn.addEventListener("click", changeColor)

