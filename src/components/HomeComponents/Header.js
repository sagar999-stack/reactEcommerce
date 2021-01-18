import React, { Component } from 'react'

import {Link} from "react-router-dom"


 class Header extends Component {
    state = {
        active: "" ,
     }
    render() {
        
        return (

                <header id="aa-header">
                {/* start header top  */}
                <div className="aa-header-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="aa-header-top-area">
                            {/* start header top left */}
                            <div className="aa-header-top-left">
                            {/* start language */}
                            <div className="aa-language">
                                <div className="dropdown">
                                <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <img src="assect/img/flag/english.jpg" alt="english flag" />ENGLISH
                                    <span className="caret" />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#"><img src="assect/img/flag/french.jpg" alt />FRENCH</a></li>
                                    <li><a href="#"><img src="assect/img/flag/english.jpg" alt />ENGLISH</a></li>
                                </ul>
                                </div>
                            </div>
                            {/* / language */}
                            {/* start currency */}
                            <div className="aa-currency">
                                <div className="dropdown">
                                <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <i className="fa fa-usd" />USD
                                    <span className="caret" />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#"><i className="fa fa-euro" />EURO</a></li>
                                    <li><a href="#"><i className="fa fa-jpy" />YEN</a></li>
                                </ul>
                                </div>
                            </div>
                            {/* / currency */}
                            {/* start cellphone */}
                            <div className="cellphone hidden-xs">
                                <p><span className="fa fa-phone" />00-62-658-658</p>
                            </div>
                            {/* / cellphone */}
                            </div>
                            {/* / header top left */}
                            <div className="aa-header-top-right">
                            <ul className="aa-head-top-nav-right">
                            <li><Link to="./">Home</Link></li>
                                <li><Link to="./MyAccount">My Account</Link></li>
                                <li><Link to="./WishList">My Wishlist</Link></li>
                              
                                <li><Link to="./MyCart">My Cart</Link></li>
                                <li><Link to="./Checkout">Checkout</Link></li>
                               
                                <li><a href data-toggle="modal" data-target="#login-modal">Login</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / header top  */}
                {/* start header bottom  */}
                <div className="aa-header-bottom">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="aa-header-bottom-area">
                            {/* logo  */}
                            <div className="aa-logo">
                            {/* Text based logo */}
                            <a href="index.html">
                                <span className="fa fa-shopping-cart" />
                                <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                            </a>
                            {/* img based logo */}
                            {/* <a href="index.html"><img src="assect/img/logo.jpg" alt="logo img"></a> */}
                            </div>
                            {/* / logo  */}
                            {/* cart box */}
                            <div className="aa-cartbox">
                            <a className="aa-cart-link" href="#">
                                <span className="fa fa-shopping-basket" />
                                <span className="aa-cart-title">SHOPPING CART</span>
                                <span className="aa-cart-notify">2</span>
                            </a>
                            <div className="aa-cartbox-summary">
                                <ul>
                                <li>
                                    <a className="aa-cartbox-img" href="#"><img src="assect/img/woman-small-2.jpg" alt="img" /></a>
                                    <div className="aa-cartbox-info">
                                    <h4><a href="#">Product Name</a></h4>
                                    <p>1 x $250</p>
                                    </div>
                                    <a className="aa-remove-product" href="#"><span className="fa fa-times" /></a>
                                </li>
                                <li>
                                    <a className="aa-cartbox-img" href="#"><img src="assect/img/woman-small-1.jpg" alt="img" /></a>
                                    <div className="aa-cartbox-info">
                                    <h4><a href="#">Product Name</a></h4>
                                    <p>1 x $250</p>
                                    </div>
                                    <a className="aa-remove-product" href="#"><span className="fa fa-times" /></a>
                                </li>                    
                                <li>
                                    <span className="aa-cartbox-total-title">
                                    Total
                                    </span>
                                    <span className="aa-cartbox-total-price">
                                    $500
                                    </span>
                                </li>
                                </ul>
                                <a className="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Checkout</a>
                            </div>
                            </div>
                            {/* / cart box */}
                            {/* search box */}
                            <div className="aa-search-box">
                            <form action>
                                <input type="text" name id placeholder="Search here ex. 'man' " />
                                <button type="submit"><span className="fa fa-search" /></button>
                            </form>
                            </div>
                            {/* / search box */}             
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* / header bottom  */}
                </header>

        )
    }
}
export default Header;
