import React, { Component } from 'react';

// import next module
import { withRouter } from 'next/router';

// import react redux module
import { connect } from 'react-redux';

// import redux action
import { loadProductDetail } from '../../redux/actions/product';

class ProductDetail extends Component {
  componentDidMount(){
    // load product detail by id
    const {query} = this.props.router;
    console.log(this.props.router);
    this.props.loadProductDetail(query.id);
  }

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component ? await Component.getInitialProps(ctx) : {};
  
    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }
  

  // static getInitialProps({store}) {}
  

  render() {
    // Router id
    const { router } = this.props;
    const { id } = router.query;

    // product from reducer
    const { product_detail } = this.props.product;

    return (
        <React.Fragment>
          <div className="header-section bg-khaki">
            <div className="container mt-5 mb-0 header-text">
              <h1 className="h2 font-weight-normal">{product_detail ? `${product_detail.name}` : ''}</h1>
            </div>
          </div>
          <section className="content-section">
            <div className="container"> 
              <div className="row">
                <div className="col-md-8">
                  {product_detail ? (
                    <img className="w-100 rounded shadow" src={product_detail.cover} />
                  ) : ( ''
                    // <Skeleton height={500} />
                  )}
                  <div className="d-none d-md-block mt-4">
                    <h5>Deskripsi</h5>
                    {product_detail ? 
                        (<p>
                            {product_detail.description}
                        </p>): ''
                        // (<Skeleton count={10}/>)
                    }
                  </div>
                </div>
                <div className="col-md-4 mt-4" >
                  <div className="d-flex justify-content-between mb-4">
                    <h6>Opsi Lisensi</h6>
                    <a href="">Lihat Detail</a>
                  </div>
                  <form >
                    {product_detail ? (
                    <div className="d-flex justify-content-between">  
                      <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                          <span className="d-block h5 mb-0">Standar</span>
                          <span className="d-block small mt-0">untuk satu situs</span>
                        </label>
                      </div>
                      <div className="pricing">
                        <div className="d-flex justify-content-start">
                          <h6 className="small">Rp</h6>
                          <h5>{product_detail.price}</h5>
                        </div>
                      </div>
                    </div>
                    ) : ( ''
                    // <Skeleton count={3}/>
                    )}
                    {/* <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                        <label class="form-check-label" for="exampleRadios1">
                            <span className="d-block h5 mb-0">Multi Situs</span>
                            <span className="d-block small mt-0">untuk situs tak terbatas</span>
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                        <label class="form-check-label" for="exampleRadios1">
                            <span className="d-block h5 mb-0">Extended</span>
                            <span className="d-block small mt-0">untuk dijual lagi</span>
                        </label>
                    </div> */}
                    {/* <button type="button" className="btn btn-block btn-mediumaquamarine font-weight-bold rounded-pill py-2 shadow mt-4" onClick={() => this.hnadleClick(product_detail)}>
                      Tambah pada Keranjang
                    </button> */}
                    <button className="btn btn-block btn-outline-mediumaquamarine font-weight-bold rounded-pill py-2">
                      Live Preview
                    </button>
                  </form>
                  <hr/>
                  <div className="px-2">
                    <ul>
                      <li className="">Direview oleh tim HaloBisnis.id</li>
                      <li className="">Dukungan teknis selama 6 bulan</li>
                      <li className="">100% jaminan uang kembali</li>
                    </ul>
                  </div>
                  <hr/>
                  {product_detail ? (
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Framework</span>
                        <span className="font-weiht-normal">{product_detail.framework}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Rilis</span>
                        {/* <span className="font-weight-normal">{product_detail&&product_detail.created_at.split("T", 1)}</span> */}
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Update</span>
                        {/* <span className="font-weight-normal">{product_detail&&product_detail.updated_at.split("T", 1)}</span> */}
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Versi</span>
                        <span className="font-weight-normal">{product_detail.version}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Kategori</span>
                        <span className="font-weight-normal">{product_detail.category}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Tipe</span>
                        <span className="font-weight-normal">{product_detail.type}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span className="font-weight-bold">Pertanyaan</span>
                        <button className="btn-sm btn-outline-mediumaquamarine rounded-pill">Hubungi Sales</button>
                    </li>
                  </ul>
                  ):(''
                    // <Skeleton count={5} />
                  )}
                </div>
              </div>
              <div className="row mt-4 d-sm-block d-md-none">
                <div className="col-md-8">
                    <h5>Deskripsi</h5>
                    {product_detail ? 
                        (<p>
                            {product_detail.description}
                        </p>): ''
                        // (<Skeleton count={10}/>)
                    }
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    );
  }
}

const MapStateToProps = state => ({
  product : state.productReducer
})

export default connect(MapStateToProps, {loadProductDetail})(withRouter(ProductDetail));