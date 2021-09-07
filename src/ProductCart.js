import React from 'react';
import './ProductCart.css';
import {useStateValue} from './StateProvider';



function ProductCart ({id, title, image, price}) {
    const [{basket}, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="productCard">
            <img className="productCard-image" src={image} alt=''/>
            <div className="productCard-info">
                <p className="productCard-title">{title}</p>
                <p className="productCard-price">${price}</p>
            
                <button onClick={removeItem}>Remove from the Cart</button>
            </div>
        </div>
    )
}



export default ProductCart