import React, { Component } from 'react'
import HeaderBanner from '../BannerComponent/HeaderBanner'
import Footer from '../components/HomeComponents/Footer'
import Header from '../components/HomeComponents/Header'
import CartSubscribe from './CartSubscribe'
import CartView from './CartView'

 class WishList extends Component {
    render() {
        return (
            <React.Fragment>
            <Header/>
            <HeaderBanner/>
            <CartView/>
            <CartSubscribe/>
            <Footer/>
        </React.Fragment>
        )
    }
}
export default WishList
