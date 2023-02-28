import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
        <Navbar/>  
    <br/>  
    <br/>
     <br/>
     <div class="login_form">
        <div class="left">
            <img src="logshoes.png"/>
        </div>

        <div class="right">
      
        <p><b><i>Hatfield joined Nike in 1981, and in 1985 started working on shoe design. He realized that his 
            architectural skills could be applied to shoes.[citation needed]
             Hatfield was also published for the architectural design of his Portland, Oregon home.[citation needed]
              He claims to have designed the cross-trainer as a "multi-sport" shoe when he realized people at his Oregon gym brought various
               sneakers with them for diverse activities such as basketball, aerobics, weightlifting and jogging.
               In 1987, Tinker Hatfield designed the Air Max 1 Running Shoe after visiting the Centre Georges Pompidou;
                and in 1990 released the third in the Air Max line, the Air Max 90 (Air Max III at the time). 
                Hatfield designed the bat-boots for Michael Keaton to wear in Batman and Batman Returns.</i></b></p>
        </div>
        <div className="button2" id="one">
            <Link to="/Product">SHOP NOW</Link>
          </div>
        </div>
        <div><Footer/></div>
        </div>

    
  )
}
