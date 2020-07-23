import React, { Component } from 'react';

import { Container } from 'react-bootstrap'

import Sidebar from './dashSidebar';

import { connect } from 'react-redux';

import  Router,{ withRouter } from 'next/router';

class DashboardContainer extends Component {
    componentDidMount(){
        // from authReducer
        const {isAuthenticated} = this.props.auth;
        const { router } = this.props;  

        if(!isAuthenticated){
            Router.push({
                pathname: '/signin',
                query: {next: router.pathname}
            });
        }
    }

    render() {
        const { children, auth, className } = this.props;

        return (
            <React.Fragment>
                <div className={`flex-xl-nowrap row mr-0 no-gutters user-area ${className}`}>
                    <div className="col-lg-2 sidebar-field">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-10 content">
                        <Container>
                            <section className="header-section">
                                <div className="pt-5">
                                    <div className="d-flex jutify-content-start">
                                        {/* <BackButton /> */}
                                        <h3 className="ml-2 mb-0 my-auto">Halo, {auth.user ? `${auth.user.first_name}` : ''}</h3>
                                    </div>
                                    <button className="btn-sm btn-secondary sidebar-togle mt-4 rounded-pill px-4" onClick={this.handleClick}>
                                        Menu
                                    </button>
                                </div>
                            </section>
                            {children}
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    auth : state.authReducer
})

export default connect(MapStateToProps)(withRouter(DashboardContainer));