import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    // 3 - começando com o useReducer
    const [number, dispath] = useReducer((state, action) => {
        return Math.random(state);
    });

    
    // 4 - avançando no useReducer
    const initialTasks = [
        {id:1, text:"Fazer alguma coisa"},
        {id:2, text:"Fazer putra coisa"}
    ]

    const taskReducer = (state, action) => {
        switch (action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText("")

                return [...state, newTask]

                case "DELETE":
                    return state.filter((task) => task.id !== action.id)
                default:
                    return state;
        }

    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispathTasks] = useReducer(taskReducer, initialTasks)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispathTasks({type: "ADD"})
    }

    const removeTask = (id) =>{
        dispathTasks({type:"DELETE", id });
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número : {number}</p>
        <button onClick={dispath}>Alterar número !</button>
        <h3>Tarefas: </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) =>(
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer