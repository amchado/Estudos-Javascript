import './App.css';

import {useState, useEffect} from "react";

//4- custom hook
import {useFetch} from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  //4 custom hook
  const {data: items, httpConfig, loading, erro} = useFetch(url)
  

  const [name, setName] = useState("")
  const [price, Setprice] = useState("")

  // 1 - resgatando dados
  // useEffect(() =>{
  //   async function fetchData(){
      
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //     return(data)
  //   }

  //   fetchData()
  // }, []);

  // 2 - adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)

    // })

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) =>[...prevProducts, addedProduct])

    //5- refatorando post 
    httpConfig(product, "POST")

    setName("")
    Setprice("")
    
  };

  //8 - desafio remove
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>carregando dados..</p>}
      {erro && <p>{erro}</p>}
      {!loading && <ul>
        {items && items.map((product) => (
          <li key={product.id}> {product.name} - R$:{product.price}  <button className='botao' onClick={() => handleRemove(product.id)}> Remover </button></li>
        ))}
      </ul>}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label >
              Nome: 
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} autoComplete='off'/>
            </label>

            <label>
              Preço:
              <input type="number" value={price} name='price' onChange={(e) => Setprice(e.target.value)}/>
            </label>
            {/* 7 - state de loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}

          </form>
        </div>
    </div>
  );
}

export default App;
