import React, { Component } from 'react'

 class Testimonial extends Component {
    render() {
        return (
                <section id="aa-testimonial">  
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-testimonial-area" role="toolbar">
                        <ul className="aa-testimonial-slider slick-initialized slick-slider">
                            {/* single slide */}
                            <div aria-live="polite" className="slick-list draggable" style={{height: 417}}><div className="slick-track" role="listbox" style={{opacity: 1, width: 3600, left: '-720px'}}><li className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{width: 720}}>
                                <div className="aa-testimonial-single">
                                    <img className="aa-testimonial-img" src="assect/img/testimonial-img-3.jpg" alt="testimonial img" />
                                    <span className="fa fa-quote-left aa-testimonial-quote" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                                    <div className="aa-testimonial-info">
                                    <p>Luner</p>
                                    <span>COO</span>
                                    <a href="#" tabIndex={-1}>Kinatic Solution</a>
                                    </div>
                                </div>
                                </li><li className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide30" style={{width: 720}}>
                                <div className="aa-testimonial-single">
                                    <img className="aa-testimonial-img" src="assect/img/testimonial-img-2.jpg" alt="testimonial img" />
                                    <span className="fa fa-quote-left aa-testimonial-quote" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                                    <div className="aa-testimonial-info">
                                    <p>Allison</p>
                                    <span>Designer</span>
                                    <a href="#" tabIndex={0}>Dribble.com</a>
                                    </div>
                                </div>
                                </li><li className="slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide31" style={{width: 720}}>
                                <div className="aa-testimonial-single">
                                    <img className="aa-testimonial-img" src="assect/img/testimonial-img-1.jpg" alt="testimonial img" />
                                    <span className="fa fa-quote-left aa-testimonial-quote" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                                    <div className="aa-testimonial-info">
                                    <p>KEVIN MEYER</p>
                                    <span>CEO</span>
                                    <a href="#" tabIndex={-1}>Alphabet</a>
                                    </div>
                                </div>
                                </li><li className="slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide32" style={{width: 720}}>
                                <div className="aa-testimonial-single">
                                    <img className="aa-testimonial-img" src="assect/img/testimonial-img-3.jpg" alt="testimonial img" />
                                    <span className="fa fa-quote-left aa-testimonial-quote" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                                    <div className="aa-testimonial-info">
                                    <p>Luner</p>
                                    <span>COO</span>
                                    <a href="#" tabIndex={-1}>Kinatic Solution</a>
                                    </div>
                                </div>
                                </li><li className="slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{width: 720}}>
                                <div className="aa-testimonial-single">
                                    <img className="aa-testimonial-img" src="assect/img/testimonial-img-2.jpg" alt="testimonial img" />
                                    <span className="fa fa-quote-left aa-testimonial-quote" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                                    <div className="aa-testimonial-info">
                                    <p>Allison</p>
                                    <span>Designer</span>
                                    <a href="#" tabIndex={-1}>Dribble.com</a>
                                    </div>
                                </div>
                                </li></div></div>
                            {/* single slide */}
                            {/* single slide */}
                            <ul className="slick-dots" style={{display: 'block'}} role="tablist"><li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation30" id="slick-slide30"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation31" id="slick-slide31"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation32" id="slick-slide32"><button type="button" data-role="none" role="button" aria-required="false" tabIndex={0}>3</button></li></ul></ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        )
    }
}
export default Testimonial;
