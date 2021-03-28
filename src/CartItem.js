import React from 'react';

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
                    src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1616948831~hmac=0baf37f13bf11acbc01729197b882266"
                    onClick = {() => onIncreaseQuantity(product)}/>
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1616948903~hmac=74d67dea004542be3b65cb79fbee4e03"
                    onClick = {() => onDecreaseQuantity(product)}
                    /> 
                    <img 
                    alt="remove" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1616949071~hmac=00c4c96f4062bbcfc55721675029ad84"
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