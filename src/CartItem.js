import React from 'react';

class CartItem extends React.Component{


    increaseQuantity = () =>{
        // console.log(this,'this');
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1,
            }
        });
    }

    decreaseQuantity = () =>{
        // console.log(this,'this');
        this.setState((prevState) => {
            if(prevState.qty>0)
            {
                return {
                qty: prevState.qty-1,
                }
            }
        });
    }

    render(){
        const { product }= this.props;
        const { onIncreaseQuantity,onDecreaseQuantity,onDelete }= this.props;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style = { styles.image }/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{product.title}</div>
                <div style={{color: 'grey'}}>Rs. {product.price}</div>
                <div style={{color: 'blue'}}>Qty: {product.qty}</div>
                <div className="cart-item-actions">
                    <div>
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/149/149145.svg?token=exp=1614611575~hmac=d30739dda24c96cb260cc29fd6657179"
                        onClick = {() => onIncreaseQuantity(product)}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/149/149146.svg?token=exp=1614613401~hmac=e2130936326f3d0843d61604f4c5acfc"
                        onClick = {() => onDecreaseQuantity(product)}
                        /> 
                        <img 
                        alt="remove" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1614613461~hmac=6f52cdedccccde9114bbf0f03714b9e1"
                        onClick = {() => onDelete(product.id)}
                        />
                    </div>

                </div>
            </div>
        </div> 
        );      
    }
}

const styles = {
    image :{
        height: 100,
        width: 100,
        borderRadius: 5,
    }

};

export default CartItem;