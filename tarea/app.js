// ===== Version 2: DOM + eventos =====

const app = document.getElementById("app");
const form = document.createElement("form");
const entrada = document.createElement("input");
const boton = document.createElement("button");
const contador = document.createElement("p");
const mensaje = document.createElement("p");
const ul = document.createElement("ul");

boton.textContent = "Agregar";
contador.textContent = "0 caracteres";
form.append(entrada, boton);
app.append(form, contador, mensaje, ul);

// evento input: contador
entrada.addEventListener("input", () => {
  contador.textContent = entrada.value.length + " caracteres";
});

// evento submit: validar y agregar
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = entrada.value.trim();

  if (texto.length < 3) {
    mensaje.textContent = "Escribe al menos 3 caracteres.";
    mensaje.className = "error";
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  li.addEventListener("click", () => li.classList.toggle("hecha")); // evento click: marcar

  const borrar = document.createElement("button");
  borrar.textContent = "Borrar";
  borrar.addEventListener("click", (e) => {
    // evento click: borrar
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(borrar);
  ul.appendChild(li);

  mensaje.textContent = "Tarea agregada.";
  mensaje.className = "ok";
  entrada.value = "";
  contador.textContent = "0 caracteres";
});
