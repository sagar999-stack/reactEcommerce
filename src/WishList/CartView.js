import React, { Component } from 'react'

export default class CartView extends Component {
    render() {
        return (
<section id="cart-view">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="cart-view-area">
          <div className="cart-view-table aa-wishlist-table">
            <form action>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                      <td><a href="#"><img src="assect/img/man/polo-shirt-1.png" alt="img" /></a></td>
                      <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                      <td>$250</td>
                      <td>In Stock</td>
                      <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                    </tr>
                    <tr>
                      <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                      <td><a href="#"><img src="assect/img/man/polo-shirt-2.png" alt="img" /></a></td>
                      <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                      <td>$150</td>
                      <td>In Stock</td>
                      <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                    </tr>
                    <tr>
                      <td><a className="remove" href="#"><fa className="fa fa-close" /></a></td>
                      <td><a href="#"><img src="assect/img/man/polo-shirt-3.png" alt="img" /></a></td>
                      <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                      <td>$50</td>
                      <td>In Stock</td>
                      <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                    </tr>                     
                  </tbody>
                </table>
              </div>
            </form>             
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}
