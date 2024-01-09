
import './App.css';
import MyComponents from './components/MyComponents'
import {useState} from "react"
import Title from './components/Title';

function App() {
  const n = 15

  const [nome] = useState("Arthur")

  const redTitle = false

  return (
    <div className="App">
      {/* Css Global */}
      <h1>React com CSS</h1>

      {/* Css de componente */}
      <MyComponents></MyComponents>
      <p>este paragrafo é do app.js</p>

      {/* Css inline */}
      <p style={{color:"red", backgroundColor:"lightgreen", padding:"10px"}}>este elemento foi modificado com css inline</p>

      {/* Css inline dinamico */}
      <h2 style={n < 10 ? ({
        color:"purple"
      }) : ({color:"lightpink"})}>Css dinâmico</h2>

      <h2 style={n > 10 ? ({
        color:"purple"
      }) : ({color:"lightpink"})}>Css dinâmico</h2>

      <h2 style={nome === 'Arthur' ? ({
        color:"green", backgroundColor:"darkred"
      }) : null }>Css dinâmico</h2>

      {/* classe dinamica*/}
      <h2 className={redTitle ? "red-title" : "title" }>Este titulo vai ter classe dinâmica</h2>

      {/* CSS modules */}
     <Title></Title>
    </div>
    
  );
}

export default App;
