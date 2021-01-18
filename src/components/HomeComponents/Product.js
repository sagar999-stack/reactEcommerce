import React, { Component } from 'react'
import axios from 'axios'
import EachProduct from './EachProduct';
 class Product extends Component {
    constructor(){
        super();
        this.state={
            Information:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(Response=>{
            this.setState({Information:Response.data})
        })
        .catch(error=>{
            alert("some thing went wrong");
        })
    }
    render() {
        const data = this.state.Information;
    
        return (
                    <section id="aa-product">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                            <div className="aa-product-area">
                                <div className="aa-product-inner">
                                {/* start prduct navigation */}
                                <ul className="nav nav-tabs aa-products-tab">
                                    <li className="active"><a href="#men" data-toggle="tab"></a></li>
                                    <li><a href="#women" data-toggle="tab">Women</a></li>
                                    <li><a href="#sports" data-toggle="tab">Sports</a></li>
                                    <li><a href="#electronics" data-toggle="tab">Electronics</a></li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    {/* Start men product category */}
                                    <div className="tab-pane fade in active" id="men">
                                    <ul className="aa-product-catg">
                                        {/* start single product item */}
                                        {(this.state.Information).map((product) =>(
                                    <EachProduct product = { product} key = {product.id} />
                                ))}               
                                    </ul>
                                    <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right" /></a>
                                    </div>
                                    {/* / electronic product category */}
                                </div>
                                {/* quick view modal */}                  
                                <div className="modal fade" id="quick-view-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                    <div className="modal-content">                      
                                        <div className="modal-body">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <div className="row">
                                            {/* Modal view slider */}
                                            <div className="col-md-6 col-sm-6 col-xs-12">                              
                                            <div className="aa-product-view-slider">                                
                                                <div className="simpleLens-gallery-container" id="demo-1">
                                                <div className="simpleLens-container">
                                                    <div className="simpleLens-big-image-container">
                                                    <a className="simpleLens-lens-image" data-lens-image="img/view-slider/large/polo-shirt-1.png">
                                                        <img src="assect/img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image" />
                                                    </a>
                                                    </div>
                                                </div>
                                                <div className="simpleLens-thumbnails-container">
                                                    <a href="#" className="simpleLens-thumbnail-wrapper" data-lens-image="img/view-slider/large/polo-shirt-1.png" data-big-image="img/view-slider/medium/polo-shirt-1.png">
                                                    <img src="assect/img/view-slider/thumbnail/polo-shirt-1.png" />
                                                    </a>                                    
                                                    <a href="#" className="simpleLens-thumbnail-wrapper" data-lens-image="img/view-slider/large/polo-shirt-3.png" data-big-image="img/view-slider/medium/polo-shirt-3.png">
                                                    <img src="assect/img/view-slider/thumbnail/polo-shirt-3.png" />
                                                    </a>
                                                    <a href="#" className="simpleLens-thumbnail-wrapper" data-lens-image="img/view-slider/large/polo-shirt-4.png" data-big-image="img/view-slider/medium/polo-shirt-4.png">
                                                    <img src="assect/img/view-slider/thumbnail/polo-shirt-4.png" />
                                                    </a>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            {/* Modal view content */}
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="aa-product-view-content">
                                                <h3>T-Shirt</h3>
                                                <div className="aa-price-block">
                                                <span className="aa-product-view-price">$34.99</span>
                                                <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
                                                <h4>Size</h4>
                                                <div className="aa-prod-view-size">
                                                <a href="#">S</a>
                                                <a href="#">M</a>
                                                <a href="#">L</a>
                                                <a href="#">XL</a>
                                                </div>
                                                <div className="aa-prod-quantity">
                                                <form action>
                                                    <select name id>
                                                    <option value={0} selected={1}>1</option>
                                                    <option value={1}>2</option>
                                                    <option value={2}>3</option>
                                                    <option value={3}>4</option>
                                                    <option value={4}>5</option>
                                                    <option value={5}>6</option>
                                                    </select>
                                                </form>
                                                <p className="aa-prod-category">
                                                    Category: <a href="#">Polo T-Shirt</a>
                                                </p>
                                                </div>
                                                <div className="aa-prod-view-bottom">
                                                <a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart" />Add To Cart</a>
                                                <a href="#" className="aa-add-to-cart-btn">View Details</a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>                        
                                    </div>{/* /.modal-content */}
                                    </div>{/* /.modal-dialog */}
                                </div>{/* / quick view modal */}              
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

        )
    }
}

export default Product;
