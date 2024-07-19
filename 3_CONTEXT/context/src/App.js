import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

//components
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
