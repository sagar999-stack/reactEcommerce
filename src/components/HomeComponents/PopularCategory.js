import React, { Component } from 'react'

 class PopularCategory extends Component {
    render() {
        return (
        <section id="aa-popular-category">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="row">
                <div className="aa-popular-category-area">
                    {/* start prduct navigation */}
                    <ul className="nav nav-tabs aa-products-tab">
                    <li className="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                    <li><a href="#featured" data-toggle="tab">Featured</a></li>
                    <li><a href="#latest" data-toggle="tab">Latest</a></li>                    
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                    {/* Start men popular category */}
                    <div className="tab-pane fade in active" id="popular" role="toolbar">
                        <ul className="aa-product-catg aa-popular-slider slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button" style={{display: 'block'}}>Previous</button>
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: 3598, left: '-771px'}}><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide05" style={{width: 237}} data-slick-index={-3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide06" style={{width: 237}} data-slick-index={-2} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide07" style={{width: 237}} data-slick-index={-1} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: 237}} data-slick-index={0} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: 237}} data-slick-index={1} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: 237}} data-slick-index={2} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={0}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide03" style={{width: 237}} data-slick-index={3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-3.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide04" style={{width: 237}} data-slick-index={4} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide05" style={{width: 237}} data-slick-index={5} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide06" style={{width: 237}} data-slick-index={6} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide07" style={{width: 237}} data-slick-index={7} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: 237}} data-slick-index={8} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide01" style={{width: 237}} data-slick-index={9} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide02" style={{width: 237}} data-slick-index={10} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={-1}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li></div></div><button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}}>Next</button><ul className="slick-dots" style={{display: 'block'}} role="tablist"><li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation02" id="slick-slide02"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>3</button></li></ul></ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right" /></a>
                    </div>
                    {/* / popular product category */}
                    {/* start featured product category */}
                    <div className="tab-pane fade" id="featured" role="toolbar">
                        <ul className="aa-product-catg aa-featured-slider slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button" style={{display: 'block'}}>Previous</button>
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: 3598, left: '-771px'}}><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide15" style={{width: 237}} data-slick-index={-3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide16" style={{width: 237}} data-slick-index={-2} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide17" style={{width: 237}} data-slick-index={-1} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide10" style={{width: 237}} data-slick-index={0} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide11" style={{width: 237}} data-slick-index={1} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide12" style={{width: 237}} data-slick-index={2} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={0}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide13" style={{width: 237}} data-slick-index={3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-3.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide14" style={{width: 237}} data-slick-index={4} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide15" style={{width: 237}} data-slick-index={5} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide16" style={{width: 237}} data-slick-index={6} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide17" style={{width: 237}} data-slick-index={7} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide10" style={{width: 237}} data-slick-index={8} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide11" style={{width: 237}} data-slick-index={9} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide12" style={{width: 237}} data-slick-index={10} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={-1}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li></div></div><button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}}>Next</button><ul className="slick-dots" style={{display: 'block'}} role="tablist"><li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation10" id="slick-slide10"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation11" id="slick-slide11"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation12" id="slick-slide12"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>3</button></li></ul></ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right" /></a>
                    </div>
                    {/* / featured product category */}
                    {/* start latest product category */}
                    <div className="tab-pane fade" id="latest" role="toolbar">
                        <ul className="aa-product-catg aa-latest-slider slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" role="button" style={{display: 'block'}}>Previous</button>
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        {/* start single product item */}
                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: 3598, left: '-771px'}}><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide25" style={{width: 237}} data-slick-index={-3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide26" style={{width: 237}} data-slick-index={-2} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide27" style={{width: 237}} data-slick-index={-1} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-current slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide20" style={{width: 237}} data-slick-index={0} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide21" style={{width: 237}} data-slick-index={1} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={0}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-active" tabIndex={-1} role="option" aria-describedby="slick-slide22" style={{width: 237}} data-slick-index={2} aria-hidden="false">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={0}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={0}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={0}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={0}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={0}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={0}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide23" style={{width: 237}} data-slick-index={3} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-3.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide24" style={{width: 237}} data-slick-index={4} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide25" style={{width: 237}} data-slick-index={5} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide26" style={{width: 237}} data-slick-index={6} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-hot" href="#">HOT!</span>
                            </li><li className="slick-slide" tabIndex={-1} role="option" aria-describedby="slick-slide27" style={{width: 237}} data-slick-index={7} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>This is Title</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide20" style={{width: 237}} data-slick-index={8} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Polo T-Shirt</a></h4>
                                    <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                </figcaption>
                                </figure>                     
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>                            
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sale" href="#">SALE!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide21" style={{width: 237}} data-slick-index={9} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/women/girl-2.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                <figcaption>
                                    <h4 className="aa-product-title"><a href="#" tabIndex={-1}>Lorem ipsum doller</a></h4>
                                    <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                </figure>                      
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li><li className="slick-slide slick-cloned" tabIndex={-1} role="option" aria-describedby="slick-slide22" style={{width: 237}} data-slick-index={10} aria-hidden="true">
                                <figure>
                                <a className="aa-product-img" href="#" tabIndex={-1}><img src="assect/img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                <a className="aa-add-card-btn" href="#" tabIndex={-1}><span className="fa fa-shopping-cart" />Add To Cart</a>
                                </figure>
                                <figcaption>
                                <h4 className="aa-product-title"><a href="#" tabIndex={-1}>T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                                </figcaption>
                                <div className="aa-product-hvr-content">
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist" tabIndex={-1}><span className="fa fa-heart-o" /></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Compare" tabIndex={-1}><span className="fa fa-exchange" /></a>
                                <a href="#" data-toggle2="tooltip" data-placement="top" title data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View" tabIndex={-1}><span className="fa fa-search" /></a>
                                </div>
                                {/* product badge */}
                                <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                            </li></div></div><button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}}>Next</button><ul className="slick-dots" style={{display: 'block'}} role="tablist"><li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation20" id="slick-slide20"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation21" id="slick-slide21"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation22" id="slick-slide22"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>3</button></li></ul></ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right" /></a>
                    </div>
                    {/* / latest product category */}              
                    </div>
                </div>
                </div> 
            </div>
            </div>
        </div>
        </section>

        )
    }
} export default PopularCategory;
