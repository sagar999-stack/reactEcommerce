import React, { Component } from 'react'
import HeaderBanner from '../BannerComponent/HeaderBanner'
import Footer from '../components/HomeComponents/Footer'
import Header from '../components/HomeComponents/Header'
import DetailsInCart from './DetailsInCart'

export default class MyCart extends Component {
    render() {
        return (
            <React.Fragment>
            <Header/>
            <HeaderBanner/>
            <DetailsInCart/>
            <Footer/>
        </React.Fragment>
        )
    }
}
