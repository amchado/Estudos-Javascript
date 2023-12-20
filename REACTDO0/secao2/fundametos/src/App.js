//components
import FirstComponent from "./components/FirstComponent"

import TemplateExpressions from "./components/TemplateExpressions"

import MyComponent from "./components/MyComponent";

import Events from "./components/events";

import Challenge from "./components/challenge";

//styles / css
import './App.css';



function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>

     <FirstComponent></FirstComponent>

     <TemplateExpressions></TemplateExpressions>

     <MyComponent></MyComponent>

     <Events></Events>

     <Challenge></Challenge>

    </div>
  );
}

export default App;
