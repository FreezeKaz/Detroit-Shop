import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Accueil from './Accueil';
import Cart from './Cart';


class App extends Component{

  constructor(){
    super();
    
      this.state = {
        cart: [],
        totalCart: []
      }
  };

  componentDidMount = () => {
    
    if (localStorage.getItem('cart') != null) {
      this.setState({
        cart: JSON.parse(localStorage.getItem('cart')),
        totalCart: localStorage.getItem('totalCart'),
      })
    }
    else{
      this.setState({
        cart: [],
        totalCart: []
      })
      localStorage.setItem('cart',[])
      localStorage.setItem('totalCart',0)
    }
  }
    

  addToCart = (article) => {

    this.setState({
      cart: [
        ...this.state.cart,
        article
      ],  
      

    }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    this.setState({
      totalCart:  Number(this.state.totalCart) + Number(article.attributes.price) 

    }, () => localStorage.setItem('totalCart', this.state.totalCart))

  }

  removeArticle = (articleToRemove) => {
    let index = this.state.cart.findIndex(item => item.id === articleToRemove.id)
    const tempCart = [...this.state.cart]
    if (index >= 0) {
      tempCart.splice(index, 1)
      this.setState({
        cart: [...tempCart]
      }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    }
    var haha = Number(localStorage.getItem('totalCart')) - Number(articleToRemove.attributes.price)
    localStorage.setItem('totalCart', haha )
  }
  
  render() {
    return (  
      <Router>
        <Routes>
          <Route exact path='/' element={<Accueil cart={this.state.cart} addToCart={this.addToCart} /> } />
          <Route exact path='/cart' element={<Cart cart={this.state.cart} addToCart={this.addToCart} removeArticle={this.removeArticle}/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;
