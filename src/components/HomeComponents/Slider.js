import React, { Component } from 'react'

 class Slider extends Component {
    render() {
        return (
                <section id="aa-slider">
                <div className="aa-slider-area">
                    <div id="sequence" className="seq seq-no-touch seq-active seq-autoplaying seq-step3" data-seq-enabled={0}>
                    <div className="seq-screen" style={{height: '100%', width: '100%'}}>
                        <ul className="seq-canvas">
                        {/* single slide item */}
                        <li className="seq-out" style={{zIndex: 1, transitionDuration: '0ms', transitionProperty: 'opacity, transform', opacity: 1}}>
                            <div className="seq-model" style={{}}>
                            <img data-seq src="assect/img/slider/1.jpg" alt="Men slide img" style={{}} />
                            </div>
                            <div className="seq-title" style={{}}>
                            <span data-seq style={{}}>Save Up to 75% Off</span>                
                            <h2 data-seq style={{}}>Men Collection</h2>                
                            <p data-seq style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                            <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn" style={{}}>SHOP NOW</a>
                            </div>
                        </li>
                        {/* single slide item */}
                        <li className="seq-out" style={{zIndex: 4, transitionDuration: '0ms', transitionProperty: 'opacity, transform', opacity: 1}}>
                            <div className="seq-model" style={{}}>
                            <img data-seq src="assect/img/slider/2.jpg" alt="Wristwatch slide img" style={{}} />
                            </div>
                            <div className="seq-title" style={{}}>
                            <span data-seq style={{}}>Save Up to 40% Off</span>                
                            <h2 data-seq style={{}}>Wristwatch Collection</h2>                
                            <p data-seq style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                            <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn" style={{}}>SHOP NOW</a>
                            </div>
                        </li>
                        {/* single slide item */}
                        <li className="seq-in" style={{zIndex: 5, transitionDuration: '0ms', transitionProperty: 'opacity, transform', opacity: 1}}>
                            <div className="seq-model" style={{}}>
                            <img data-seq src="assect/img/slider/3.jpg" alt="Women Jeans slide img" style={{}} />
                            </div>
                            <div className="seq-title" style={{}}>
                            <span data-seq style={{}}>Save Up to 75% Off</span>                
                            <h2 data-seq style={{}}>Jeans Collection</h2>                
                            <p data-seq style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                            <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn" style={{}}>SHOP NOW</a>
                            </div>
                        </li>
                        {/* single slide item */}           
                        <li className="seq-out" style={{zIndex: 1, transitionDuration: '0ms', transitionProperty: 'opacity, transform', opacity: 1}}>
                            <div className="seq-model" style={{}}>
                            <img data-seq src="assect/img/slider/4.jpg" alt="Shoes slide img" style={{}} />
                            </div>
                            <div className="seq-title" style={{}}>
                            <span data-seq style={{}}>Save Up to 75% Off</span>                
                            <h2 data-seq style={{}}>Exclusive Shoes</h2>                
                            <p data-seq style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                            <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn" style={{}}>SHOP NOW</a>
                            </div>
                        </li>
                        {/* single slide item */}  
                        <li className="seq-out" style={{zIndex: 1, transitionDuration: '0ms', transitionProperty: 'opacity, transform', opacity: 1}}>
                            <div className="seq-model" style={{}}>
                            <img data-seq src="assect/img/slider/5.jpg" alt="Male Female slide img" style={{}} />
                            </div>
                            <div className="seq-title" style={{}}>
                            <span data-seq style={{}}>Save Up to 50% Off</span>                
                            <h2 data-seq style={{}}>Best Collection</h2>                
                            <p data-seq style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum.</p>
                            <a data-seq href="#" className="aa-shop-now-btn aa-secondary-btn" style={{}}>SHOP NOW</a>
                            </div>
                        </li>                   
                        </ul>
                    </div>
                    {/* slider navigation btn */}
                    <fieldset className="seq-nav" aria-controls="sequence" aria-label="Slider buttons">
                        <a type="button" className="seq-prev" aria-label="Previous"><span className="fa fa-angle-left" /></a>
                        <a type="button" className="seq-next" aria-label="Next"><span className="fa fa-angle-right" /></a>
                    </fieldset>
                    </div>
                </div>
                </section>

        )
    }
}
export default Slider;
