import React, { Component } from 'react'

 class Support extends Component {
    render() {
        return (
                <section id="aa-support">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-support-area">
                        {/* single support */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="aa-support-single">
                            <span className="fa fa-truck" />
                            <h4>FREE SHIPPING</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                            </div>
                        </div>
                        {/* single support */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="aa-support-single">
                            <span className="fa fa-clock-o" />
                            <h4>30 DAYS MONEY BACK</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                            </div>
                        </div>
                        {/* single support */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="aa-support-single">
                            <span className="fa fa-phone" />
                            <h4>SUPPORT 24/7</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
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
export default Support;