var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".click");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function updateAlert(message) {
    alert(message); // This will show a browser alert with the message
}

function clicks() {
    button.addEventListener("click", function() {
        updateAlert("Hex " + color1.value + " to " + color2.value);
    });
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Call the clicks function to add event listener to the button
clicks();

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

// Example usage:
// const hexColor = rgbToHex(208, 211, 29);
// console.log(hexColor);