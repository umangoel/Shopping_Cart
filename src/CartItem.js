import React from 'react';
import plus from './images/plus.svg';
import minus from './images/minus.svg';
import del from './images/delete.svg';


const CartItem = (props) => {
    const { product }= props;
    const { onIncreaseQuantity,onDecreaseQuantity,onDelete }= props;
    return(
    <div className="cart-item">
        <div className="left-block">
            <img style = { styles.image } src = {product.img}/>
        </div>
        <div className="right-block">
            <div style={{fontSize: 25}}>{product.title}</div>
            <div style={{color: 'grey'}}>Rs. {product.price}</div>
            <div style={{color: 'blue'}}>Qty: {product.qty}</div>
            <div className="cart-item-actions">
                <div>
                    <img alt="increase" 
                    className="action-icons" 
                    src={ plus }
                    onClick = {() => onIncreaseQuantity(product)}/>
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src={ minus }
                    onClick = {() => onDecreaseQuantity(product)}
                    /> 
                    <img 
                    alt="remove" 
                    className="action-icons" 
                    src={ del }
                    onClick = {() => onDelete(product.id)}
                    />
                </div>

            </div>
        </div>
    </div> 
    );      
}

const styles = {
    image :{
        height: 100,
        width: 100,
        borderRadius: 5,
    }
};

export default CartItem;