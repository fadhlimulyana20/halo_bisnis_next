// import react module
import React, { Component } from 'react';

// imporrt next module
import Head from 'next/head';

// import project module
import { FooterLg } from '../components/footer';

// import react-redux module
import { connect } from 'react-redux';

// import redux action
import { loadProductSample } from '../redux/actions/sample';

class Sample extends Component {
  componentDidMount(){
    this.props.loadProductSample()
  }

  render() {
    // sample from reducer
    const {product_sample} = this.props.sample;
    const sample_list = product_sample.length > 0 ? product_sample.map(item => {
      return (
        <div className="col-md-3 col-6 px-1">
          <div className="px-1 shadow rounded py-1 mb-2">
            <a href={item.url_preview ? item.url_preview : ""} target="_blank">
              <img className="img-fluid rounded" src={item.cover} />
            </a>
            <div className="px-2">
              <a href={item.url_preview ? item.url_preview : ""} target="_blank">
                  <h6 className="font-weight-normal mb-0 mt-2">{item.name}</h6>
              </a>
              <p className="mb-0 mt-0 text-muted small">{item.description}</p>
            </div>
          </div>
        </div>
      )
    }) : '';

    return (
      <React.Fragment>
        <Head>
          <title>Sampel | Halobisnis.id</title>
        </Head>
        <div className="header-section bg-khaki">
          <div className="container mt-5 mb-0 header-text">
            <h1 className="h2 font-weight-normal">Sampel Produk</h1>
          </div>
        </div>
        <div className="content-section container main">
          <div className="row no-gutters">
            {sample_list}
          </div>
        </div>
        <FooterLg />
      </React.Fragment>
    );
  }
}

const MapStateToProps = state => ({
  sample : state.sampleReducer
});

export default connect(MapStateToProps, {loadProductSample})(Sample);