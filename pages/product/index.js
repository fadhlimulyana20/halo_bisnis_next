// react module
import React, { Component } from 'react';

// next module
import Link from 'next/link';
import Head from 'next/head';

// FontAwesome module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// React-Scroll Module
import { Link as ScrollLink } from 'react-scroll';

// React-bootstrap module
import { Container, Row, Col } from 'react-bootstrap';

// Project Module
import { FooterLg } from '../../components/footer';

// react redux module
import { connect } from 'react-redux';

// project redux module
import { loadProduct } from '../../redux/actions/product';

class Product extends Component {
  componentDidMount(){
    this.props.loadProduct();
  }

	render() {
    // Product list from reducer
    const {product} = this.props.product;
    const product_list_element = product.length > 0 ? product.map(item => {
      return (
        <div className="col-md-3 col-6 mb-3" key={item.id}>
          <Link href={`/product/${item.id}`} >
            <a>
              <img className="img-fluid rounded" src={item.cover} />
            </a>
          </Link>
          <div className="d-flex justify-content-between mt-2">
            <div>
              <Link href={`/product/${item.id}`}>
                <a className="h6 mb-0 title font-weight-normal">
                  {item.name}
                </a>
              </Link>
              {/* <h6 className="mb-0 title font-weight-normal">{item.name}</h6> */}
              <p className="small">{item.type}</p>
            </div>
            <div className="pricing">
              <div className="d-flex justify-content-start">
                  <h6 className="small">Rp</h6>
                  <h6>{item.price}</h6>
              </div>
            </div>
          </div>
        </div>
      )
    }) : '';

		return (
      <React.Fragment>
        <div className="header-section bg-salmon">
          <div className="container mt-5 mb-0 header-text text-center">
            <div className="mx-auto img-header-brand">
                <img src="/halobisnis.png" className="img-fluid" />
            </div>
            <h1 className="h2 font-weight-normal">Membangun <span className="font-weight-bold">Segalanya</span></h1>
            <p>Bangun apapun dengan template buatan HaloBisnis.id</p>
            <ScrollLink
              to="product-list" 
              duration={500}
              spy={true}
              smooth={true}
              offset={-70}
              className="h3 btn btn-outline-light text-white rounded-circle"
              >
                <FontAwesomeIcon icon={faChevronDown} />
            </ScrollLink>
          </div>
      </div>

        {/* Product list section */}
        <section className="content-section" id="product-list">
          <Container>
            <div className="d-flex justify-content-between mb-2" id="recent-product-header">
              <div>
                <h5 className="mb-0">Terbaru</h5>
                <p className="small">Tema terbaru yang ditambahkan</p>
              </div>
            </div>
            <div className="row">
              {product_list_element}
            </div>
          </Container>
        </section>

        {/* Featured Product list section
        <section className="content-section" id="product-list">
          <Container>
            <div className="d-flex justify-content-between mb-2" id="recent-product-header">
              <div>
                <h5 className="mb-0">Populer</h5>
                <p className="small">Tema yang sedang Populer</p>
              </div>
            </div>
          </Container>
        </section> */}
        

        {/* footer section */}
        <FooterLg/>
			</React.Fragment>
		);
	}
}

const MapStateToProps = state => ({
  product : state.productReducer
})

export default connect(MapStateToProps, { loadProduct })(Product);