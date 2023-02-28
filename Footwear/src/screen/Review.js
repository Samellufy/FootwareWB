import React from 'react';
import Navbar from '../components/Navbar';
import { FaStar} from 'react-icons/fa';

export default function Review() {
    return (
        <div>
               <div><Navbar /></div>
               <br/>
               <br/>
            <div class="review" id="Review">
                <h1>Customer's<span>review</span></h1>

                <div class="review_box">
                    <div class="review_card">
                        <div class="card_top">
                            <div class="profile">

                                <div class="profile_image">
                                    <img src="man_dp2.jpg"  alt="..." />
                                </div>

                                <div class="name">
                                    <strong>Anil Sindhu</strong>

                                    <div class="like">
                                        <i><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="comment">
                            <p>
                            The shoes are Very comfortable, good looking, 
                            long lasting, easy to clean. I have black shoes with white nike symbol on it. They are air max

                             simply the best.
                             Just close your eyes and grab a pair of nike shoes


                            </p>
                        </div>
                    </div>

                    <div class="review_card">
                        <div class="card_top">
                            <div class="profile">

                                <div class="profile_image">
                                    <img src="man_dp3.jpg"  alt="..."/>
                                </div>

                                <div class="name">
                                    <strong>Sayuru Tharanga</strong>

                                    <div class="like">
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="comment">
                            <p>
                            This shoes gives you more comfort than others because of its smoothness and quality. I Am Using These Shoes Since Years.
                            The customer service is also very good and nice.



                            </p>
                        </div>
                    </div>
                    <div class="review_card">
                        <div class="card_top">
                            <div class="profile">

                                <div class="profile_image">
                                    <img src="man_dp1.jpg"  alt="..."/>
                                </div>

                                <div class="name">
                                    <strong>Rajesh Patil</strong>

                                    <div class="like">
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        <i ><FaStar/></i>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="comment">
                            <p>
                            Nike is my favourite brand in shoes. I like nike shoes only.last month I bought new nike shoes. Great experience with light weight of shoes. I got 6 months warranty.


                            </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                )
}
