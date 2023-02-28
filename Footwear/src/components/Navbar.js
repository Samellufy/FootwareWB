import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser } from 'react-icons/fa';
import '../App.css';


export default function Navbar(props) {
    return (
        <div>
            <nav>
            <div class="logo">
                    <h1>Fashio<span>n</span></h1>
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Product">Products</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Review">Review</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                </ul>

                <div className='flex shopping-card'>
                <div onClick={() => props.handleShow(true)}>
        
        <div class="icons">

           <Link to="/Cart"><i><FaCartPlus /></i></Link>
           <sup> {props.count} </sup>
           <Link to="/Login"><i><FaUser /></i></Link>
        </div>
    </div>
        </div>
             
            </nav>

        </div>
    )
}