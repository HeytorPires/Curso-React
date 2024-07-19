import React from 'react'
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from '../hooks/useCounterContext';
const Products = () => {
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>Products</h1>
      <p>Valor do counter : {counter}</p>
    </div>
  )
}

export default Products