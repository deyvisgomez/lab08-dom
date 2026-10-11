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

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase
