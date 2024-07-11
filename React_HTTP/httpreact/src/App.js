//import logo from './logo.svg';
import './App.css';
import { useState} from "react"
import  { useFetch }  from './hooks/useFetch';

const url = "http://localhost:3000/products"
function App() {
  const [Products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const {data : items, httpConfig} = useFetch(url);


  //adição Produtos
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const product = {
      name,
      price
    }
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers:{
    //     "content-Type" : "application/json"
    //   },  
    //   body: JSON.stringify(Products )
    // });
    // // carregamento dinamico

    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct])
    
    // Post
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }
  return (
    <div className="App">
      <h1>lista de Produtos</h1>
      <ul>
        {items && items.map((product) =>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className='add-product'>
            <form onSubmit={handleSubmit}>
              <label>
                Nome
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}  />
              </label>
              <label>
                preço
                <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}  />
              </label>
              <input type="submit" value="criar" />
            </form>
      </div>
    </div>
  );
}

export default App;
