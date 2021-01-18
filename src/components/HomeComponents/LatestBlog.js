import React, { Component } from 'react'

 class LatestBlog extends Component {
    render() {
        return (
                <section id="aa-latest-blog">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-latest-blog-area">
                        <h2>LATEST BLOG</h2>
                        <div className="row">
                            {/* single latest blog */}
                            <div className="col-md-4 col-sm-4">
                            <div className="aa-latest-blog-single">
                                <figure className="aa-blog-img">                    
                                <a href="#"><img src="assect/img/promo-banner-1.jpg" alt="img" /></a>  
                                <figcaption className="aa-blog-img-caption">
                                    <span href="#"><i className="fa fa-eye" />5K</span>
                                    <a href="#"><i className="fa fa-thumbs-o-up" />426</a>
                                    <a href="#"><i className="fa fa-comment-o" />20</a>
                                    <span href="#"><i className="fa fa-clock-o" />June 26, 2016</span>
                                </figcaption>                          
                                </figure>
                                <div className="aa-blog-info">
                                <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p> 
                                <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                            {/* single latest blog */}
                            <div className="col-md-4 col-sm-4">
                            <div className="aa-latest-blog-single">
                                <figure className="aa-blog-img">                    
                                <a href="#"><img src="assect/img/promo-banner-3.jpg" alt="img" /></a>  
                                <figcaption className="aa-blog-img-caption">
                                    <span href="#"><i className="fa fa-eye" />5K</span>
                                    <a href="#"><i className="fa fa-thumbs-o-up" />426</a>
                                    <a href="#"><i className="fa fa-comment-o" />20</a>
                                    <span href="#"><i className="fa fa-clock-o" />June 26, 2016</span>
                                </figcaption>                          
                                </figure>
                                <div className="aa-blog-info">
                                <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p> 
                                <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right" /></a>         
                                </div>
                            </div>
                            </div>
                            {/* single latest blog */}
                            <div className="col-md-4 col-sm-4">
                            <div className="aa-latest-blog-single">
                                <figure className="aa-blog-img">                    
                                <a href="#"><img src="assect/img/promo-banner-1.jpg" alt="img" /></a>  
                                <figcaption className="aa-blog-img-caption">
                                    <span href="#"><i className="fa fa-eye" />5K</span>
                                    <a href="#"><i className="fa fa-thumbs-o-up" />426</a>
                                    <a href="#"><i className="fa fa-comment-o" />20</a>
                                    <span href="#"><i className="fa fa-clock-o" />June 26, 2016</span>
                                </figcaption>                          
                                </figure>
                                <div className="aa-blog-info">
                                <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p> 
                                <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right" /></a>
                                </div>
                            </div>
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
export default LatestBlog


