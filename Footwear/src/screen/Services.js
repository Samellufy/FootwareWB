import React from 'react'
import Navbar from '../components/Navbar';
import { FaTruck, FaArrowCircleLeft,FaHeadset} from 'react-icons/fa';

export default function Services() {
  return (
    <div>
    <div><Navbar /></div>
    <br/>
    <br/>
    <br/>
    <div class="services" id="Services">
        <h1>our<span>services</span></h1>

        <div class="services_cards">
            <div class="services_box">
                <i ><FaTruck/></i>
                <h3>Fast Delivery</h3>
        
            </div>

            <div class="services_box">
                <i><FaArrowCircleLeft/></i>
                <h3>10 Days Replacement</h3>
                
            </div>

            <div class="services_box">
                <i><FaHeadset/></i>
                <h3>24 x 7 Support</h3>
               
            </div>
        </div>

    </div></div>
  )
}
