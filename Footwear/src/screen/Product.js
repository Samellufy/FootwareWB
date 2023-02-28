import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import CartList from '../components/CartList';
export default function Product() {


  const [product, setProduct] = useState([
    {
      url: 'shoes1.png',
      name: 'Nike',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'shoes2.png',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'red_shoes3.png',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'red_shoes4.png',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'red_shoes5.png',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'red_shoes6.png',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }
  return (
  
    <div>
    
      <Navbar count={cart.length}
        handleShow ={ handleShow } ></Navbar>
     
      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <List product={product} addToCart={addToCart} ></List>
      }
        </div>
    
  )
}
