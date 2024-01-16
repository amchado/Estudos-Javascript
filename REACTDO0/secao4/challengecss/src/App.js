import './App.css';
import Car from './components/Car'


const carros = [
  {modelo: "Onix", km:200 ,color:"Preto"},
  {modelo: "Captur", km:0 ,color:"Branco"},
  {modelo: "Celta", km:2200 ,color:"Prata"}
]

function App() {
  return (
    <div className="App">
      <h1>Showroom de Carros</h1>
      <div className="car-container">
        {carros.map((car, index) => (
          <Car  modelo={car.modelo} km={car.km} color={car.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
