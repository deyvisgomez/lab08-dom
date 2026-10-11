# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: (Brave)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                            | Se mantiene al recargar (Si/No) |
| ---------------------------- | ---------------------------------------------------- | ------------------------------- |
| textContent desde la consola | Cambio el titulo                                     | Si                              |
| textContent desde app.js     | Cambio el titulo                                     | Si                              |
| style.color                  | El titulo se puso de color azul oscuro               | Si                              |
| classList.add                | subrayo de un color amarillo el texto                | Si                              |
| createElement + appendChild  | Creo un nuevo texto abajo de CSS que dice javascript | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara         | Cuanto suma por accion |
| -------------- | ----------------------------- | ---------------------- |
| click          | Hacer click en el boton       | 1                      |
| dblclick       | Hacer doble click en el boton | 1                      |
| mouseover      | Poner el cursor en el boton   | 1                      |

En la consola se puede ver como se activa el eventlistener y cada click es una linea de codigo donde se suma 1 al total de clicks

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                               | Se recargo la pagina (Si/No) |
| --------------------------------------- | --------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | cambia los puntos por el texto que esta en la casilla nombre          | No                           |
| Enviar sin preventDefault               | La pagina se recargo sola y se elimino los datos que estaban escritos | Si                           |
| Enviar con preventDefault, correo sin @ | Sale un aviso de que tenemos que poner @ para enviar                  | No                           |
| Enviar con preventDefault, correo con @ | Sale el aviso enviado y el correo que pusimos                         | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio  | descripcion()         | conDescuento(0.25) |
| ------- | ------- | ------- | --------------------- | ------------------ |
| laptop  | Laptop  | 2500.00 | 'Laptop - S/ 2500.00' | 1875               |
| mouse   | Mouse   | 45.00   | 'Mouse - S/ 45.00'    | 33.75              |
| teclado | Teclado | 120.00  | 'Teclado - S/ 120.00' | 90                 |
| monitor | Monitor | 680.00  | 'Monitor - S/ 680.00' | 510                |

Permite automatizar la creación de elementos de forma dinámica y se actualiza automáticamente sin tener que editar el HTML a mano.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina | Correcto (Si/No) |
| --------------- | --------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                       | Si               |
| + Lapicero 3.20 | 15.70                       | Si               |
| + Mochila 89.90 | 105.60                      | Si               |
| Sin Number()    | Nada, sale error            | No               |

| Pieza  | Linea de tu codigo donde aparece        | Para que sirve                                |
| ------ | --------------------------------------- | --------------------------------------------- |
| DOM    | document.querySelector("#formProducto") | Selecciona elementos HTML desde JavaScript.   |
| Evento | addEventListener("submit", ...)         | Detecta la acción del usuario en la interfaz. |
| Objeto | new Carrito()                           | Crea una instancia a partir de una clase.     |
