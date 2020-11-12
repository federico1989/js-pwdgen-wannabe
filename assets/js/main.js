// JavaScript fake password

var name = prompt("Come ti chiami?");
var surname = prompt("Scrivi il tuo cognome");
var color = prompt("Qual'è il tuo colore preferito?");

// Password completa

document.getElementById("complete_password").innerHTML = name + surname + color + "20";
