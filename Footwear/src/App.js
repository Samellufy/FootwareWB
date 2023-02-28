

import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './screen/Home';
import Login from './screen/Login';
import Cart from './screen/Cart';
import Signup from './screen/Signup';
import Product from './screen/Product';
import About from './screen/About';
import Services from './screen/Services';
import Review from './screen/Review';
import List from './components/List';
import './App.css';
import { useState } from 'react';
import CartList from './components/CartList';
import Header from './components/Header';



function App() {

 
  return (

    
    <BrowserRouter>
    <Header></Header>
      <div>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Product" element={<Cart/>} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Services" element={<Services/>} />
          <Route exact path="/Review" element={<Review/>} />
          <Route exact path="/List" element={<List/>} />
          <Route exact path="/CartList" element={<CartList/>} />
      
      
      
        </Routes>
      
      </div>
       
    
    </BrowserRouter>

  );
}
export default App;
