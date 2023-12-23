//Definire le variabili
let color = document.getElementById("color")
let btn = document.getElementById("btn")


//Dichiarare le funzioni

function changeColor (){
    color.style.setProperty("color",steelblue)
    color.style.setProperty("color",blueviolet)
    
}



//Eseguire le funzioni

btn.addEventListener("click", changeColor)

