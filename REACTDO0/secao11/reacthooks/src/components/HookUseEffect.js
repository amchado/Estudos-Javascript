import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    // 5 - useEffect, sem dependências
    useEffect(()=>{
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 6 - array de deps. vazio

    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    },[])

    // 7 - item no array e deps.
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(()=>{
        if(anotherNumber > 0 ){
            console.log("Sou executado apenas quando o anotherNumber muda!")
        }

    },[anotherNumber])

    //8 - cleanup do useEffect
    useEffect(()=>{

        // const timer = setTimeout(()=>{
            
        //     console.log("Hello world")

        //     setAnotherNumber(anotherNumber + 1)

        // },2000)

        // return () => clearTimeout(timer)


    },[anotherNumber])


  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar another Number</button>
        <hr />
    </div>
  )
}

export default HookUseEffect