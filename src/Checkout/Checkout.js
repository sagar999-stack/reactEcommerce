import React, { Component } from 'react'
import HeaderBanner from '../BannerComponent/HeaderBanner'
import Footer from '../components/HomeComponents/Footer'
import Header from '../components/HomeComponents/Header'
import CheckoutSection from './CheckoutSection'

export default class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
            <Header/>
            <HeaderBanner/>
            <CheckoutSection/>
            <Footer/>
        </React.Fragment>
        )
    }
}
