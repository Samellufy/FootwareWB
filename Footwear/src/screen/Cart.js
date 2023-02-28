import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import CartList from '../components/CartList';
export default function Cart() {


  const [product, setProduct] = useState([
    {
      url: 'shoes1.png',
      name: 'Nike',
      category: 'Nike Air More Uptempo',
      seller: 'VRS Seller Ghz',
      price: 1999
    },
    {
      url: 'shoes2.png',
      name: 'Nike Dunk Premium',
      category: 'Shoes',
      seller: 'VRS Ltd Siyana',
      price: 2599
    },
    {
      url: 'shoes3.png',
      name: "Nike Air Force",
      category: 'Shoes',
      seller: 'VRS Shoes',
      price: 3099
    },
    {
      url: 'shoes4.png',
      name: 'Reebok',
      category: 'Shoes',
      seller: 'Nike LTD',
      price: 4000
    },
    {
      url: 'shoes5.png',
      name: 'Puma',
      category: 'Shoes',
      seller: 'RS Ltd',
      price: 2500
    },
    {
      url: 'shoes6.png',
      name: 'Adidas',
      category: 'Shoes',
      seller: 'VS Ltd',
      price: 3990
    },
    {
      url: 'shoes2.png',
      name: 'Adidas',
      category: 'Shoes',
      seller: 'VS Ltd',
      price: 3990
    },
    {
      url: 'shoes1.png',
      name: 'Adidas',
      category: 'Shoes',
      seller: 'VS Ltd',
      price: 3990
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
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Header count={cart.length}
        handleShow ={ handleShow } ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <List product={product} addToCart={addToCart} ></List>
      }
        </div>
    
  )
}
