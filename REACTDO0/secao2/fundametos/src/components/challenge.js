



const Challenge = () =>  {

    const a = 4
    const b = 6

    const soma = () =>{
        console.log(a + b)
    }

    return(
        <div>
            <h1> O primeiro numero é {a} </h1>
            <h1> O segundo numero é {b}</h1>
            <button onClick={soma}>A soma dos dois é</button>
        </div>
    )
}

export default Challenge