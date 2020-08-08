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

## Archivos Separados

Ir a [este proyecto](archivos_separados).

Una función la podemos sacar a un archivo nuevo.

 - Este archivo lo podemos poner sobre el mismo directorio o en otro subdirectorio
 - Para que la función sea usable por el `js` principal, es importante que la exportemos con la función `export default Funcion`
 - En el `js` principal, la importamos con `import FUNCION from "./RUTA/FUNCION"`

 
Esta es el `js` principal
 
```
// index.js

import React from "react"
import ReactDom from "react-dom"

import MyInfo from "./components/MyInfo"

ReactDom.render(
  <MyInfo />,
  document.getElementById("root")
)
```
 Esta es el `js` con la función en el nuevo archivo
 
```
import React from "react"

function MyInfo() {
  return (
    <div>
      <h1>José Castelan</h1>
      <p>Esto es un paragraph</p>
      <ul>
        <li>Ichi</li>
        <li>Ni</li>
        <li>San</li>
      </ul>
    </div>
  )
}

export default MyInfo
``` 
 
 ## Componentes child y parent
 
 Ir a [este proyecto](parent_child).
 
Al separar los archivos, estas se pueden ir separando en más subarchivos, dividiendo cada sección del código
 
Aquí vemos la función principal, la cual manda llamar a una App
 
```
import React from "react"
import ReactDom from "react-dom"

import App from "./components/App"

ReactDom.render(
  <App />,
  document.getElementById("root")
) 
```

La App a su vez, manda llamar a tres subfunciones llamadas Header, MainComponent y Footer

```
import React from "react"

import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export default App
```

Estas tres funciones ya tienen el contenido a mostrar

 - Header.js

```
import React from "react"

function Header() {
  return (
    <nav>
      <h1>José Castelan</h1>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </nav>
  )
}

export default Header
```

 - MainComponent.js 

```
import React from "react"

function MainComponent() {
  return (
      <main>
        <p>Mucho contenido</p>
      </main>
  )
}

export default MainComponent
```

 - Footer.js

```
import React from "react"

function Footer() {
  return (
    <footer>
      <h3>Contact Me</h3>
    </footer>
  )
}

export default Footer
```

## Styling

Ir a [este proyecto](styling).

Los componentes finales de HTML (dev, header, footer) se pueden complementar con un class para empezar a darles diseño con css.

```
//Header.js
import React from "react"

function Header() {
  return (
    <header className="navbar">
      Este es mi encabezado
    </header>
  )
}

export default Header
```

En el index.css se puede ir añadiendo los componentes de diseño de las clases creadas

```
body {
  margin: 0
}

.navbar {
  height: 100px;
  background-color: #333;
  color: whitesmoke;
  margin-bottom: 15px;
  txt-align: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

En el index.js, hay que importar directamente el archivo css en caso de que no lo esté considerando

```
import React from "react"

import Header from "./components/Header"
import MainComponent from "./components/MainComponent"
import Footer from "./components/Footer"

import './index.css';

function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export default App
```

## Integración con Javascript

Ir a [este proyecto](jsx_to_js_back).

Se puede integrar código de Javascript dentro de las funciones. 

```
function App() {
  const firstName = "Jose"
  const lastName = "Castelan"
  const date = new Date()
  const hours = date.getHours()

  let timeOfDay


  if (hours < 12) {
    timeOfDay = "Buenos días"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Buenas tardes"
  } else {
    timeOfDay = "Buenas noches"
  }

  //Continua
```

En los return se recomienda estos modos de salida

 - {`${variable1} ${variable2} ${variable3}!`}
 - { unicaVariable }

```
//Continuación
  return (
    <div>
        <h1>{`${timeOfDay} ${firstName} ${lastName}!`}  </h1>
        <p>Ya son las { date.getHours() % 12} </p>
    </div>

  )
```

## Objectos CSS

Ir a [este proyecto](objetos_css).

Se pueden hacer variables que contenga código css. 

La constante debe tomar las siguientes cuestiones

 - No se puede usar guiones. Las variables de CSS cambian de nombre quitando el guión, y la siguiente letra va en mayúscula
 - Las variables alfanuméricas (valores en pixeles), deben ir entrecomillado
 
```
  const styles = {
      color: "#FF8C00",
      backgroundColor: "#FF2D00",
      fontSize: "24px"
    }
```

Este es insertado en el return

```
  return (
    <div>
        <h1 style ={styles}>{`${timeOfDay} ${firstName} ${lastName}!`}  </h1>
    </div>
  )
```

Los componentes CSS pueden ser alterados con código Javascript.

```
  const styles = {
      fontSize: "24px"
    }

  if (hours < 12) {
    timeOfDay = "Buenos días"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Buenas tardes"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "Buenas noches"
    styles.color = "#D90000"
  }
```

## Propiedades

Ir a [este proyecto](props) y [este ejercicio](jokes).

Al llamar varias veces un objeto, requerimos que vaya con información personalizada. Esto se puede hacer usando las propiedades que viajan en los scripts.

La función con los valores finales debe venir con el argumento `props` y dentro vendrán los valores deseados

En el siguiente script llamamos al object ContactCard, el cual le andamos poniendo los atributos.
```
// Apps.js
import React from "react"
import ContactCard from "./ContactCard"

import './index.css';

function App() {
    return (
        <div className="contacts">
            <ContactCard
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />

            <ContactCard
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />

            <ContactCard
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />

            <ContactCard
                name="Felix"
                imgUrl="http://placekitten.com/200/100"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />

        </div>
    )
}

export default App
```
El objeto ContactApp distribuye los atributos con el `props`

```
import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard
```

 - TIP: console.log(props) permite ver en la consola de desarrollo del browser las propiedades enviadas.
 
 
Otra forma de usarlo es enviando en las propiedades un objecto que contenta sus características (algo que puede ocurrir si se usa JSON).

Aqui vemos como viajael objeto `contact`.

```
//App.js

import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>
    )
}

export default App
```

En el `ContactCard` se tiene que ingresar al objeto `Contact` para obtener su información.

```
// ContactCard.js
import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard
```

## Mapeo de componentes

Ir a [este proyecto](mapeo) y este [ejercicio](productos).

Si se usa un origen de datos para no "hardcodear" contenido (es decir, consultar de una base de datos o usar JSON), se puede usar la función map de Javascript.

Es importante que al llamar los componentes, se considere un id para que en Javascript no arroje warnings.

Se puede enviar propiedad por propiedad

> const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

O se puede enviar el objeto en una instancia

> const jokeComponents = jokesData.map(joke => <Joke key={joke.id} joke={joke} />)

Los códigos finales quedarían así

```
// App.js

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

import "./index.css"

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App
```

```
//Joke.js

import React from "react"

function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <h1 style={{display: props.question ? "block" : "none"}}>Answer: {props.question}</h1>
            <h3 style={{color: !props.question && "#888888"}}>Question: {props.punchLine}</h3>
        </div>
    )
}

export default Joke
```

El contenido se almacena en una constante, pero puede ser una base de datos.

```
//jokesData.js

const jokesData = [
    {
        id: 1,
        punchLine: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        punchLine: "I don't know, but the flag is a big plus!"
    },
    {
        id: 3,
        question: "Did you hear about the mathematician who's afraid of negative numbers?",
        punchLine: "He'll stop at nothing to avoid them!"
    },
    {
        id: 4,
        question: "Hear about the new restaurant called Karma?",
        punchLine: "There’s no menu: You get what you deserve."
    },
    {
        id: 5,
        question: "Did you hear about the actor who fell through the floorboards?",
        punchLine: "He was just going through a stage."
    },
    {
        id: 6,
        question: "Did you hear about the claustrophobic astronaut?",
        punchLine: "He just needed a little space."
    }
]

export default jokesData
```


## Componentes basados en clases

Ir a [este proyecto](class_based).

Podemos desplegar componentes con clases preexistentes. En este caso, es una clase que hereda de `React.Component`.

```
    class App extends React.Component {
        
        render() {
            return (
                <div>
                    <h1>{this.props.whatever}</h1>
                </div>
            )
        }
    }
```

En las clases, las propiedades viajan en objetos `props`.

```
import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Jose Castelan" />
                <Greeting />
            </div>
        )
    }
}


class Header extends React.Component {
        render() {
            return (
                <header>
                    <p>Welcome, {this.props.username}!</p>
                </header>
            )
        }
    }


class Greeting extends React.Component {


    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )

    }

}
```

## Manejo de estados

Ir a [este proyecto](estados_react).

No se pueden manipular estados directamente en el aplicativo. Deben estar dominados por las clases.

Para ello, deben haber variables de estado que surjan desde el inicio de la clase. Para ello, usamos constructores donde podemos guardar los valores iniciales en una matríz.

```
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yyes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App
```
