import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './component/homepage';
import Product from './component/product';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>} />




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
