import React, { Component } from 'react';

// import redxu action
import { deleteFromCart, checkoutCart } from "../redux/actions/cart";
import { makeInvoiceProduct } from "../redux/actions/invoice";

class Cart extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="header-section bg-aquamarine">
            <div className="container mt-5 mb-0 header-text">
              <h1 className="h2 font-weight-normal">Keranjang Belanja</h1>
            </div>
          </div>

          <div className="row no-gutters fixed-bottom mb-4 align-items-center">
            <div className="col-md-8 bg-white shadow rounded-pill mx-auto">
              <div className="px-4 py-2 row">
                <div className="col-6 text-left my-auto">
                    <h5 className="mb-0">Total</h5>
                </div>
                <div className="col-6 text-right my-auto">
                  <div className="d-flex justify-content-end">
                    <p className="mt-0 mb-0">Rp.</p>
                      {/* <h5 className="mb-0 my-auto mr-2">{total_price}</h5>
                      <button className="btn btn-sm btn-mediumaquamarine rounded-pill font-weight-bold" disabled={!is_cart} onClick={() => this.handleCheckOut()}>CheckOut</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Cart;