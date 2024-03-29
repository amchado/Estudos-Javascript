//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//css
import styles from "./App.module.css"
import TaskForm from "./components/TaskForm";

//Interface
import {ITask} from "./interfaces/Task"


function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa"/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <p>Lista</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
