import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'next/router';

import { loadUserProductDetail } from '../../../redux/actions/product';

import DashboardContainer from '../../../components/dashboard/container';

class ThemeDetail extends Component {
    componentDidMount(){
        const { query } = this.props.router;
        this.props.loadUserProductDetail(query.id);
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        const {user_product_detail} = this.props.product;

        return (
            <React.Fragment>
                <DashboardContainer>
                    
                    <div className="row py-2">
                        <div className="col-md-8">
                            <div className="theme-img">
                                <img className="img-fluid" src={user_product_detail ? user_product_detail.product.cover : ''} />
                            </div>   
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="p-2 mx-auto">
                                <div className="theme-header">
                                    <h4>{user_product_detail ? user_product_detail.product.name : ''}</h4>
                                    <div className="d-flex justify-content-start mb-4">
                                        <a href={user_product_detail ? user_product_detail.product.live_preview : ''} className="btn btn-mediumaquamarine rounded-pill px-4 font-weight-bold mr-1">Live Priview</a>
                                        <a href={user_product_detail ? user_product_detail.product.file : ''} className="btn btn-mediumaquamarine rounded-pill px-4 font-weight-bold">Download</a>
                                    </div>
                                </div>
                                <div className="shadow">
                                    <ul class="list-group list-group-flush small">
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Jenis</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.type : ''}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Framework</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.framework : ''}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Rilis</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.created_at.split("T", 1) : ''}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Pembaharuan</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.updated_at.split("T", 1) : ''}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Versi</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.version : ''}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <p className="font-weight-bold m-0">Kategori</p>
                                                <p className="m-0">{user_product_detail ? user_product_detail.product.category : ''}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Deskripsi</a>
                            </li>
                        </ul>
                        <div class="tab-content mt-4 theme-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                {user_product_detail ? user_product_detail.product.description : ''}
                            </div>
                        </div>
                    </div>
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    product : state.productReducer
});

export default connect(MapStateToProps, {loadUserProductDetail})(withRouter(ThemeDetail));