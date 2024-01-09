import {useState} from "react"

const ManageData = () => {
    let someData = 10
    console.log(someData)
    
    const [number, setNunber] = useState(15)

    return(
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar varíavel</button>
            <div>
                <p>valor:{number}
                </p>
                <button onClick={()=> setNunber(25)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData 