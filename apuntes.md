Apuntes de ReactJS
==================

## Instalación
Previamente hay que hacer algunas cosas previamente

 - Instalar [NodeJS](https://nodejs.org/). Su instalación es tardada, así que ten paciencia.
 - Para crear un nuevo proyecto, desde un IDE o terminal, ejecuta

> npm install -g create-react-app

 -   Luego, debes crear el proyecto con este comando
 
> create-react-app PROYECTO

Al final, debes entrar al proyecto y ejecutarlo

> cd PROYECTO && npm run start

Este abrirá un proyecto default en la URL [http://localhost:3000
](http://localhost:3000)

## Hola mundo

Ir a [este proyecto](holamundo).

Dentro del proyecto, ir a `public` y modificar el `index.html` con los siguientes aspectos

 - Hay un div llamado "root" donde meteremos el código deseado

```
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.js"></script>
    </body>
</html>
```

Luego, dentro de `src`, modificar el `index.css` teniendo en cuenta lo siguiente.

 - Importar `react` y `react-dom` como librerías
 - Usar render para enviar un código a una sección de HTML identificada por un ID (en este caso, el ID es "root")


```
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(<h1>Holiiii</h1>,document.getElementById("root"))
```
El código se ejecuta en automático en el browser. Podemos ir retroalimentando nuestra página con los siguientes tips.


 - No puedes poner dos elementos en el mismo render. Deben existir dentro de un solo elemento (por ejemplo, un `<div>`)

```
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(<div><h1>Holiiii a todos. WTF!!!!</h1><p>Yeah!!! Es mi primer página en React</p></div>,document.getElementById("root"))
```

 - Podemos indexar los argumentos del comando `render` para hacerlo más limpio
 
``` 
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
  <div>
    <h1>Holiiii a todos. WTF!!!!</h1>
    <p>Yeah!!! Es mi primer página en React</p>
   </div>,
   document.getElementById("root")
   )
```

## Funciones

Ir a [este proyecto](funciones).

Las funciones básicamente son iguales a las de cualquier lenguaje.

 - Cuando una función devuelve un componente, se recomienda que vaya entre paréntesis.
 - Si se usa para poner la salida en el render, se debe poner como si fuera un componente independiente `<MiApp />`
 - Solo puede devolver un componente. Si se necesitan más, pueden ir dentro de un `div`
 
```
import React from "react"
import ReactDom from "react-dom"

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

ReactDom.render(
  <MyApp />,
  document.getElementById("root")
)
```