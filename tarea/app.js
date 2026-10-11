// Version 1: solo DOM

const app = document.getElementById("app");

const entrada = document.createElement("input");
const boton = document.createElement("button");
const ul = document.createElement("ul");

boton.textContent = "Agregar";

const li = document.createElement("li");
li.textContent = "Estudiar DOM";
ul.appendChild(li);

app.append(entrada, boton, ul);
