import React, { Component } from 'react'
 class CartSubscribe extends Component {
    render() {
        return (
        <section id="aa-subscribe">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="aa-subscribe-area">
                <h3>Subscribe our newsletter </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, velit!</p>
                <form action className="aa-subscribe-form">
                    <input type="email" name id placeholder="Enter your Email" />
                    <input type="submit" defaultValue="Subscribe" />
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>

        )
    }
}

export default CartSubscribe;
