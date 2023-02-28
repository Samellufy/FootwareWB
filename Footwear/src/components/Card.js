import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShare, FaRupeeSign } from 'react-icons/fa';



export default function Card(props) {
    return (
        <div>
            <div className="products" id="Products">

                <div className="box">
                    <div className="card">



                        <div className="image">
                            <img src={props.imgsrc} alt="..." />
                        </div>

                        <div className="products_text">
                            <h2>{props.shoename}</h2>
                            <p>
                                {props.title}
                            </p>
                            <h3><FaRupeeSign />{props.price}</h3>
                            <div className="products_star">
                                <i ><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                            <button to="/Cart" className="btn">Add To Cart</button>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}
