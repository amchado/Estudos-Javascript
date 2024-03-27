import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

//css
import styles from './TaskForm.module.css'

//Interfaces
import {ITask} from '../interfaces/Task'

type Props = {
  btnText:string
}

const TaskForm = ({btnText}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty]=useState<number>(0)

  const addTaskHandler = () => {

  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => { 
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
    console.log(title)
    console.log(difficulty)
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div  className={styles.input_container}>
        <label htmlFor="
        title">Título:</label>
        <input type="text" name='title' placeholder='Título da tarefa' onChange={handleChange}/>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa (1 a 5)"
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} onChange={handleChange}/>
    </form>
  )
}

export default TaskForm