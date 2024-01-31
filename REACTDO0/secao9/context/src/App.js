import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';

//components
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
       <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          
          <Route path='/about' element={<About />}></Route>

          <Route path='/products' element={<Products />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
