
import './App.css';
import Cars from './componentes/Cars'


const myCars = [{modelo:'Onix', km:12000, color:'Vermelho'},{
  modelo:'Captur',km:5500,color:'Preto'},{
    modelo:'Celta',km:1000,color:'Prata'
  }]

function App() {


  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className='car-conteiner'>
       {myCars.map((car)=>(
        <Cars car={car}/>
       ))}
      </div>
    </div>
  );
}

export default App;
