import React from 'react'
import { Link, useParams} from "react-router-dom"
import { useFetch } from '../hooks/useFetch';

import "./Home.css"
const Product = () => {
  // 4 - roya dinamica
  const {id} = useParams();

  // 5 - carregamento de dados individual
  const url = "http://localhost:3000/products/" + id
  const {data: product, loading, error} = useFetch(url)
  console.log(product)
  return (
  <>
    <p>Id do Produto: {id}</p>

      { error && <p>ocorreu um erro </p>}
      {loading && <p> Carregando ...</p>}

      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          {/* 6 - nested ROutes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
  </>
  )
}

export default Product