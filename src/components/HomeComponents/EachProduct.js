import React, { Component } from 'react'

export default class EachProduct extends Component {
    render() {
        const {product} = this.props;
        return (
            <li><figure><a className="aa-product-img" href="#">
                <img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                
                <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart" />{product.capital}</a>
                <figcaption><h4 className="aa-product-title">
                    <a href="#">{product.name}</a></h4>
                    <span className="aa-product-price">$45.50</span>
                    <span className="aa-product-price"><del>$65.50</del></span></figcaption></figure>
                <div className="aa-product-hvr-content"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Add to Wishlist"><span className="fa fa-heart-o" /></a><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Compare"><span className="fa fa-exchange" /></a><a href="#" data-toggle2="tooltip" data-placement="top" data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View">
                    <span className="fa fa-search" /></a>
                </div><span className="aa-badge aa-sale" href="#">SALE!</span>
            </li>

        )
    }
}
