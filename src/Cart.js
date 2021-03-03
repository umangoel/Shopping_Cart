import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Mobile Phone',
                    price: 9999,
                    qty: 1,
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 999,
                    qty: 1,
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 50000,
                    qty: 1,
                    id: 3
                }
            ]
        }
    }   
    handleIncrease = (product) => {
    const { products } = this.state ;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
    }

    handleDecrease = (product) => {
    const { products } = this.state ;
    const index = products.indexOf(product);
    if(products[index].qty>0)
    {
        products[index].qty -= 1;
        this.setState({
            products
        })
    }
    }

    handleDelete = (id) => {
        const { products } = this.state ;
        const items = products.filter((product) => product.id !== id);
        this.setState({
            products: items
        })
    }

    render(){
        const { products }=  this.state ;
        return(
            <div className="Cart-Item">
                CART
                {products.map((product) =>
                    {
                       return <CartItem 
                       product = { product } 
                       key = {product.id} 
                       onIncreaseQuantity = { this.handleIncrease }
                       onDecreaseQuantity = { this.handleDecrease }
                       onDelete = { this.handleDelete }
                       /> 
                    }
                )
                }
            </div>
        );
    }

}




export default Cart;