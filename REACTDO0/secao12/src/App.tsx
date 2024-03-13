import './App.css';

import React, {createContext} from "react"

// 4 - Importando componentes
import FirstComponents from './components/FirstComponents';

//5 - desestruturando um componente 
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
// 6 - useState
import State from './components/State';

//10 - extraindo o context
import Context from './components/Context';

// 8 - type
type textOrNull = string | null

type fixed = "isso" | "aquilo" | "ou"

// 9 - context
interface IAppContext{
  language:string
  framework:string
  projects:number
}

// 9 
export const AppContext = createContext<IAppContext | null >(null)




function App() {

  //1 - variaveis
  const name: string = "Arthur"
  const age: number = 21
  const ifItWork:boolean = false
  
  //2- funções

  const userGreeting = (name:string): string =>{
    return `Olá, ${name}`
  }

 // 8 - type
  const mytext:textOrNull = "tem algum texto aqui "
  let mySecondText:textOrNull = "opa"

 const testandoFixed:fixed = "isso"

// 9 - context
const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
}


 
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {ifItWork && <p>Esta trabalhando </p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponents/>
      <SecondComponent name="Segundo"/>
      <Destructuring title="Destruturando um componente" content='Algum conteudo sobre o titulo' comentsQty={10} tags={["js","ts","react","dev"]} 
      category={Category.TS}/>
      <State/>
      {mytext && <p>Tem texto na variavel</p> }
      {mySecondText &&  <p>Tem texto na variavel</p> }
      <Context></Context>
    </div> 
    </AppContext.Provider>
    
  );
}

export default App;
