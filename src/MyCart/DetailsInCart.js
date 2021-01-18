import React, { Component } from 'react'

 class DetailsInCart extends Component {
    render() {
        return (
    <section id="cart-view">
    <div className="container">
        <div className="row">
        <div className="col-md-12">
            <div className="cart-view-area">
            <div className="cart-view-table">
                <form action>
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                        <th />
                        <th />
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                        <td><a href="#"><img src="assect/img/man/polo-shirt-1.png" alt="img" /></a></td>
                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                        <td>$250</td>
                        <td><input className="aa-cart-quantity" type="number" defaultValue={1} /></td>
                        <td>$250</td>
                        </tr>
                        <tr>
                        <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                        <td><a href="#"><img src="assect/img/man/polo-shirt-2.png" alt="img" /></a></td>
                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                        <td>$150</td>
                        <td><input className="aa-cart-quantity" type="number" defaultValue={1} /></td>
                        <td>$150</td>
                        </tr>
                        <tr>
                        <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                        <td><a href="#"><img src="assect/img/man/polo-shirt-3.png" alt="img" /></a></td>
                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                        <td>$50</td>
                        <td><input className="aa-cart-quantity" type="number" defaultValue={1} /></td>
                        <td>$50</td>
                        </tr>
                        <tr>
                        <td colSpan={6} className="aa-cart-view-bottom">
                            <div className="aa-cart-coupon">
                            <input className="aa-coupon-code" type="text" placeholder="Coupon" />
                            <input className="aa-cart-view-btn" type="submit" defaultValue="Apply Coupon" />
                            </div>
                            <input className="aa-cart-view-btn" type="submit" defaultValue="Update Cart" />
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </form>
                {/* Cart Total view */}
                <div className="cart-view-total">
                <h4>Cart Totals</h4>
                <table className="aa-totals-table">
                    <tbody>
                    <tr>
                        <th>Subtotal</th>
                        <td>$450</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>$450</td>
                    </tr>
                    </tbody>
                </table>
                <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
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
export default DetailsInCart
