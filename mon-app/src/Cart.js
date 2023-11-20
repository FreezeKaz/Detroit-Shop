import './component/css/Cart.css'
import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import Navbar from './component/Navbar';
import CartItem from './component/CartItem';
import {round} from 'mathjs/lib/browser/math.js'
import {Link} from 'react-router-dom';
import MyFooter from './component/Footer';
import ParticleBackground from './component/ParticleBackground';


class Cart extends Component {

  constructor(props){
    super(props)        
  }
  async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const articles = await response.json()
    this.setState({articles:articles})
  }
    
  render () {
    return(         
      <>        
        <ParticleBackground type={"hexa"}/>
        <Navbar/>
        <div className="wrap mt-5 cf">
          <div className="heading cf">
            <h1>My Cart</h1>
            <Link to="/" className="continue myButton">Continue Shopping</Link>
          </div>  
          <div className="cart">
            {this.props.cart.map((elements,i) =><CartItem cart={this.props.cart} removeArticle={this.props.removeArticle} element={elements} key={i}/>)}
          </div>   
          <div className="promoCode">
            <label for="promo">Have A Promo Code?</label>
            <input type="text" name="promo" placholder="Enter Code" />
            <Button href="#" className="btn"></Button>
          </div>
          <div className="subtotal cf">
            <div className="totalRow"><span className="label">Product Total</span><span className="value">${Number.parseFloat(localStorage.getItem("totalCart")).toFixed(2)}</span></div>
            <div className="totalRow"><span className="label">+ Taxes</span><span className="value"></span></div>
            <div className="totalRow final"><span className="label">Total</span><span className="value">${round(localStorage.getItem("totalCart"))}</span></div>
            <div className="totalRow"><a href="#" className="btn continue">Checkout</a></div> 
          </div>
        </div>
        <MyFooter/>
      </>
    ) 
  }
}
export default Cart;
