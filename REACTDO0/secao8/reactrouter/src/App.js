
import './App.css';

//1 - cofing react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


//pages

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info'
import Notfound from './pages/Notfound';
import Search from './pages/Search';


//components

import Navbar from "./components/Navbar";
import SearchForm from './components/SearchForm';




function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        {/* 9- search */}
        <SearchForm/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            {/* 6 - nested route */}
            <Route path='/products/:id/info' element={<Info/>}></Route>
            {/* 4 - rota dinamica */}
            <Route path='/products/:id' element={<Product />}></Route>
            {/* 9 - search */}
            <Route path='/search' element={<Search />}></Route>
            {/* 10 - redirect */}
            <Route path='/company' element={<Navigate to='/about'></Navigate>}></Route>
            {/* 7 - rota não encontrada */}
            <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
