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

Que agregue: las clases Tarea y ListaTareas y una funcion render() que dibuja la lista usando los objetos.

Por que: para separar los datos (objetos) de lo que se ve (DOM) y tener el codigo mas ordenado.

Que cambio en la pagina: se ve y funciona igual, pero ahora las tareas viven en lista.tareas y ya no solo en el HTML.

```js
class Tarea {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }
  alternar() {
    this.completada = !this.completada;
  }
  descripcion() {
    return (this.completada ? "[x] " : "[ ] ") + this.texto;
  }
}

class ListaTareas {
  constructor() {
    this.tareas = [];
  }
  agregar(texto) {
    this.tareas.push(new Tarea(texto));
  }
  eliminar(tarea) {
    this.tareas = this.tareas.filter((t) => t !== tarea);
  }
}

const lista = new ListaTareas();

function render() {
  ul.replaceChildren();
  lista.tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = tarea.descripcion();
    li.addEventListener("click", () => {
      tarea.alternar();
      render();
    });

    const borrar = document.createElement("button");
    borrar.textContent = "Borrar";
    borrar.addEventListener("click", (e) => {
      e.stopPropagation();
      lista.eliminar(tarea);
      render();
    });

    li.appendChild(borrar);
    ul.appendChild(li);
  });
}
```

## Donde uso DOM, eventos y objetos

| Parte   | Donde esta en el codigo final                                       |
| ------- | ------------------------------------------------------------------- |
| DOM     | createElement, append, replaceChildren y la funcion render()        |
| Eventos | submit en el form, input en el campo, click en la tarea y en Borrar |
| Objetos | Las clases Tarea y ListaTareas y el objeto lista                    |

## Pruebas realizadas

| Accion                          | Resultado esperado             | Resultado obtenido             | Cumple (Si/No) |
| ------------------------------- | ------------------------------ | ------------------------------ | -------------- |
| Enviar con el campo vacio       | Mensaje rojo de error          | Mensaje rojo de error          | Si             |
| Escribir "ab" y enviar          | Mensaje de minimo 3 caracteres | Mensaje de minimo 3 caracteres | Si             |
| Escribir "Estudiar JS" y enviar | La tarea aparece en la lista   | La tarea aparece en la lista   | Si             |
| Click sobre una tarea           | La tarea se tacha              | La tarea se tacha              | Si             |
| Click en Borrar                 | La tarea desaparece            | La tarea desaparece            | Si             |

## Por que diseñe asi mi clase

La clase Tarea tiene texto y completada porque es lo minimo que necesito para mostrar una tarea y saber si ya esta hecha. Sus metodos alternar() y descripcion() hacen que la tarea cambie su estado y se muestre como texto sin depender del DOM. La clase ListaTareas guarda el arreglo tareas y tiene agregar() y eliminar() para manejar todas las tareas en un solo lugar. Asi el DOM solo se encarga de dibujar y escuchar eventos, y la logica queda separada.
