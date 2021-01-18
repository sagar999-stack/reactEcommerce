
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route } from "../node_modules/react-router-dom"

import  Header from './components/HomeComponents/Header'
import  Menu from './components/HomeComponents/Menu'
import  Slider from './components/HomeComponents/Slider'
import  Promo from './components/HomeComponents/Promo'
import  Product from './components/HomeComponents/Product'
import  Banner from './components/HomeComponents/Banner'
import  PopularCategory from './components/HomeComponents/PopularCategory'
import  Support from './components/HomeComponents/Support'
import  Testimonial from './components/HomeComponents/Testimonial'
import  LatestBlog from './components/HomeComponents/LatestBlog'
import  ClientBrand from './components/HomeComponents/ClientBrand'
import  Subscribe from './components/HomeComponents/Subscribe'
import  Footer from './components/HomeComponents/Footer'
import MyAccount from './MyAccountComponents/MyAccount'
import Home from './components/HomeComponents/Home'
import WishList from './WishList/WishList'
import Checkout from './Checkout/Checkout';
import MyCart from './MyCart/MyCart';

function App() {

  return (
    <Router>
      <>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/MyAccount" exact component={MyAccount}></Route>
          <Route path="/WishList" exact component={WishList}></Route>
          <Route path="/MyCart" exact component={MyCart}></Route>
          <Route path="/Checkout" exact component={Checkout}></Route>
            
          </Switch>


      </>
    </Router>
        

  );
}

export default App;
