import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import {Link} from 'react-router-dom';
import { FaChevronRight} from 'react-icons/fa';

import Navbar from '../components/Navbar';
import List from '../components/List';


export default function Home() {
  return (
  
<div>
      <div><Navbar /></div>
    
      <section>
        <div className="main" id="Home">
          <div className="main_content">
            <div className="main_text">
              <h1>NIKE<br /><span>Collection</span></h1>
              <p>
              Nike is one of the top sneaker brands, and they have collaborated with many incredible luxury brands. 
              Nike is a beloved brand all over the world, best known for its stunning sneakers,
               but they also offer an amazing collection of sports and athleisure wear.
               As one of the biggest and most successful brands in the sneaker industry.
               Many of these collaborations are limited edition, so you have to be pretty quick to get your hands on these collections.
              </p>
            </div>
            <div className="main_image">
              <img src="shoes.png" alt="..." />
            </div>
          </div>
          
          <div className="button">
            <Link to="/Product">SHOP NOW</Link>
          
            <i><FaChevronRight/></i>
          </div>
        </div>
      </section>
      <div className="products">
        <div className="box">
                  <Card shoename="Nike"
                        title="Nike Air More Uptempo '96"
                        imgsrc="shoes1.png"
                        price="2599"/>
                  <Card shoename="Nike"
                        title="Nike Dunk High Retro Premium"
                        imgsrc="shoes2.png"
                        price="3099"/>
                  <Card shoename="Nike"
                        title="Nike Air Force 1 '07 Next Nature"
                        imgsrc="shoes3.png"
                        price="4000"/>
                  <Card shoename="Reebok"
                        title="Reebok Air Force 1 '07 LV8 EMB"
                        imgsrc="shoes4.png"
                        price="2500"/>
                  <Card shoename="Puma"
                        title="Puma Air Max Plus SE"
                        imgsrc="shoes5.png"
                         price="3990"/>
                  <Card shoename="Nike"
                        title="Nike Air Max 270"
                        imgsrc="shoes6.png"
                        price="4099"/>
                  <Card shoename="Adidas"
                        title="Adidas Air Force 1 Mid '07 LX"
                        imgsrc="shoes7.png"
                         price="3099"/>
                  <Card shoename="Adidas"
                        title="  Air Force 1 Mid React"
                        imgsrc="shoes8.png"
                         price="3500"/>
                  </div>
          </div>
    
      <div><Footer/></div>
    </div>
  )
}

