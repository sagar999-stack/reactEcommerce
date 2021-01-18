import React, { Component } from 'react'

class HeaderBanner extends Component {
    render() {
        return (
            <section id="aa-catg-head-banner">
            <img src="assect/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
            <div className="aa-catg-head-banner-area">
                <div className="container">
                <div className="aa-catg-head-banner-content">
                    <h2>Cart Page</h2>
                    <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>                   
                    <li className="active">Cart</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>

        )
    }
}
export default HeaderBanner
