import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadUserProduct } from '../../../redux/actions/product';

import { withRouter } from 'next/router';
import Link from 'next/link';

import DashboardContainer from '../../../components/dashboard/container';

class Theme extends Component {
    componentDidMount(){
        this.props.loadUserProduct();
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        const {product} = this.props;
        const {user_product} = product;

        const { router } = this.props;
        const path = router.pathname;

        const user_product_list = user_product ? (
            user_product.map(element => {
                return (
                    <React.Fragment>
                        <div className="col-6 col-md-3 px-1">
                            <div class="card w-100 rounded shadow">
                                <img src={element.product.cover} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title mb-0">{element.product.name}</h6>
                                    <p className="small mt-0">{element.product.type}</p>
                                    <Link href={`${path}/${element.id}`} >
                                        <a className="btn-sm btn-mediumaquamarine rounded-pill px-4 font-weight-bold">
                                            Lihat
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
         ) : '';
        return (
            <React.Fragment>
                <DashboardContainer>
                    <section className="py-2 my-auto mb-5">
                        <h5>Tema Anda</h5>
                        <hr className="mt-0"></hr>
                        <div className="row no-gutters">
                            {user_product_list}
                        </div>
                    </section>
                </DashboardContainer>
            </React.Fragment>      
        );
    }
}

const MapStateToProps = state => ({
    product : state.productReducer
})

export default connect(MapStateToProps, { loadUserProduct })(withRouter(Theme));