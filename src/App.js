// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products: [
            {
                title: 'Mobile Phone',
                price: 9999,
                qty: 1,
                id: 1,
                img: "https://images.unsplash.com/photo-1560617544-b4f287789e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            },
            {
                title: 'Watch',
                price: 999,
                qty: 1,
                id: 2,
                img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80"
            },
            {
                title: 'Laptop',
                price: 50000,
                qty: 1,
                id: 3,
                img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
        products : items
    })
}

getCount = () => {
  const { products } = this.state;
  
  let count = 0;
  products.forEach((product) => {
    count+=product.qty;
  })
  return count;
}

getPrice = () => {
  const { products } = this.state;
  
  let count = 0;
  products.forEach((product) => {
    count=count+ (product.qty*product.price);
  })
  return count;
}


    render(){
      const { products } = this.state ;
      return (
        <div className="App">
          {/* <h1>
            Cart
          </h1> */}
          <Navbar
          count = { this.getCount() } 
          />
          <Cart
          products = { products } 
          onIncreaseQuantity = { this.handleIncrease }
          onDecreaseQuantity = { this.handleDecrease }
          onDelete = { this.handleDelete } 
          />
          <div style={{padding: 10 ,fontSize: 20, fontFamily: 'sans-serif'}}>
            Total : {this.getPrice()}
          </div>
        </div>
      );
    }
}

export default App;
