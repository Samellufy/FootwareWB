import '../App.css';
import { FaStar, FaHeart, FaShare, FaRupeeSign } from 'react-icons/fa';

function List({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (

                        <div style={{ width: '24%' ,display:''}}>
                            <div className='products'>

                                <div className='box'>
                                    <div className='card'>
                                        <div className='image'>
                                <img src={productItem.url} width="100%" />
                                </div>
                                <div className="products_text">
                                <h2>{productItem.name}</h2>
                                
                                <p>{productItem.category} | {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <div className="products_star">
                                <i ><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                                <button
                                    onClick={() => addToCart(productItem)}
                                    className="btn" >Add To Cart</button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List