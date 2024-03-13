
import './App.css';

function App() {

  //1 - variaveis
  const name: string = "Arthur"
  const age: number = 21
  const ifItWork:boolean = false
  
  //2- funções

  const userGreeting = (name:string): string =>{
    return `Olá, ${name}`
  }



  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {ifItWork && <p>Esta trabalhando </p>}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
