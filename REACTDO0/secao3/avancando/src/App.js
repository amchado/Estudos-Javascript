

import './App.css';
import Img2 from './assets/img2.jpg.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/conditionalRender';
import ListerRender from './components/listerRender';
import ManageData from './components/manajeData';
import ShowUsername from './components/showUsername';
import Fragments from './components/Fragment';
import Container from './components/Container';
import ExecuteFunctions from './components/ExecuteFunctions';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [{id:1, brand:"Ferrari", color:"Amarela", newCar: true, km: 0},
  {id:2, brand:"Lamborguini", color:"Vermelha", newCar: false, km: 100},
  {id:3, brand:"Fiat Uno", color:"Azul", newCar: true, km: 0}
  ]

const users = [
  {id:1, nome:"Arthur", idade:21, profissao:"Programador"},
  {id:2, nome:"Vitoria", idade:22, profissao:"Empresaria"},
  {id:3, nome:"Gabriel", idade:15, profissao:"Não possui profissão"}
]

  function showMessage(){
    console.log("Evento de componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em Public */}
        <img src="/img1.jpg.jpg" alt="Paisagem de Gelo" />
        <div>
          {/* Imagem em asset (src) */}
          <div>
            <img src={Img2} alt="paisagem de uma arvore" />
          </div>
        </div>
      </div>
      <ManageData></ManageData>
      <ListerRender></ListerRender>
      
      <ConditionalRender></ConditionalRender>
      {/* props */}
      <ShowUsername name= "Matheus"></ShowUsername>
      {/* destructuring */}
      <CarDetails brand = "BMW" km={100000} color = "Preto" newCar={false}></CarDetails>
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={1200} color="Prata" newCar={false}></CarDetails>
      <CarDetails brand="Chevrolet" km={0} color="Branco" newCar={true}></CarDetails>
      {/* loop em array ed objetos */}
      {cars.map((car)=>(
        <CarDetails
        key={car.id} 
        brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}></CarDetails>
      ))}
      {/* fragment */}
      <Fragments propFragment="Teste"></Fragments>
      {/* Children */}
      <Container>
        <p>E este é o conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunctions myFunction={showMessage}/>
      {/* State lift */}
      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* DESAFIO */}
      {users.map((user) =>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}></UserDetails>
      ))}
    </div>
    
  );
}

export default App;
