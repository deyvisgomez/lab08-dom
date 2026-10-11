# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas. Se escribe una tarea, se agrega, se marca como hecha con un click y se borra con un boton.

## Version 1: solo DOM

Que agregue: cree el input, el boton y la lista con createElement y los puse en la pagina con append.

Por que: para practicar como se arma una pagina solo con JavaScript.

Que cambio en la pagina: ahora se ve un campo, un boton y una lista con una tarea fija, pero no pasa nada al hacer click.

```js
const app = document.getElementById("app");

const entrada = document.createElement("input");
const boton = document.createElement("button");
const ul = document.createElement("ul");

boton.textContent = "Agregar";

const li = document.createElement("li");
li.textContent = "Estudiar DOM";
ul.appendChild(li);

app.append(entrada, boton, ul);
```

## Version 2: con eventos

Que agregue: los eventos submit, input y click, un boton Borrar y una validacion que muestra un mensaje en la pagina.

Por que: para que la pagina responda a lo que hace el usuario y avise si el dato esta mal.

Que cambio en la pagina: ahora se pueden agregar tareas, marcarlas con click y borrarlas. El contador cambia al escribir y si hay menos de 3 letras sale un mensaje en rojo.

```js
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

entrada.addEventListener("input", () => {
  contador.textContent = entrada.value.length + " caracteres";
});

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
  li.addEventListener("click", () => li.classList.toggle("hecha"));

  const borrar = document.createElement("button");
  borrar.textContent = "Borrar";
  borrar.addEventListener("click", (e) => {
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
```

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase
