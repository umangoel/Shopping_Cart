import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style = { styles.image }/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>Title</div>
                <div style={{color: 'grey'}}>Rs. 999</div>
                <div style={{color: 'blue'}}>Qty: 1</div>
                <div className="action-icons">

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