// import { useContext } from "react"
// import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//4- refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

//5 - context mais complexo 
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
    // const {counter} = useContext(CounterContext)

    const {counter} = useCounterContext()

    // 5 - contexto mais complexo
    const {color, dispatch} = useTitleColorContext()

    console.log(color)

    // 6 - alterando state complexo
      const setTiTleColor = (color) => {
        dispatch({type:color})
      }
  
    return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do Contador: {counter}</p>
        {/* 3- alterando valor contexto */}
        <ChangeCounter></ChangeCounter>
        {/* 6 - alterando context complexo */}
        <div>
          <button onClick={() => setTiTleColor("Red")}>Vermelho</button>
          <button onClick={() => setTiTleColor("Blue")}>Azul</button>
          
        </div>
    </div>
  )
}

export default Home