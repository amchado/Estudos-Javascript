import {useState} from 'react'
import { usePreviews } from '../hooks/usePreviews'

const HookConstom = () => {
    const [number, setNumber] = useState(0)
    const previewsValue = usePreviews(number)

  return (
    <div>
        <h2>HookConstom</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previewsValue}</p>
        <button onClick={() => setNumber(Math.random)}>Alterar</button>
        <hr />
    </div>
  )
}

export default HookConstom