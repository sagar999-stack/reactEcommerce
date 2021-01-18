import React, { Component } from 'react'
// import {BrowserRouter as Router,Switch,Route } from '../../node_modules/react-router-dom'
import Header from '../components/HomeComponents/Header'
import HeaderBanner from '../BannerComponent/HeaderBanner'
import Footer from '../components/HomeComponents/Footer'
import Form from './Form'
 class MyAccount extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <HeaderBanner/>
                <Form/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default MyAccount;
