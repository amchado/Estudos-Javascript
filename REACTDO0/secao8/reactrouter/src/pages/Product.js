import './Product.css'

import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import {Link} from "react-router-dom"

const Product = () => {
    
    const {id} = useParams()

    // 5 - carregamento dado individual 
    const url = 'http://localhost:3000/products/' + id;

    const {data: product, loading, error} = useFetch(url)

    console.log(product)
  
    return <>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro....</p>}
        {loading && <p>Carregando..</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>
                {/* 6 - nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
}

export default Product