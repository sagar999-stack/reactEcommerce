import React, { Component } from 'react'
import Banner from './Banner';
import ClientBrand from './ClientBrand';
import Footer from './Footer';
import Header from './Header';
import LatestBlog from './LatestBlog';
import Menu from './Menu';
import PopularCategory from './PopularCategory';
import Product from './Product';
import Promo from './Promo';
import Slider from './Slider';
import Subscribe from './Subscribe';
import Support from './Support';
import Testimonial from './Testimonial';

 class Home extends Component {
    render() {
        return (
            <div>
        <Header/>
        <Menu/>
        <Slider/>
        <Promo/>
        <Product/>
        <Banner/>
        <PopularCategory/>
        <Support/>
        <Testimonial/>
        <LatestBlog/>
        <ClientBrand/>
        <Subscribe/>
        <Footer/>
            </div>
        )
    }
}
export default Home;