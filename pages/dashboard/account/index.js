import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import DashboardContainer from '../../../components/dashboard/container';

import { userLoad } from '../../../redux/actions/auth'

class UserAccountComponent extends Component {
    state = {  }

    componentDidMount(){
        this.props.userLoad();
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() { 
        const {router} = this.props;
        const path = router.pathname;
        const change_email_url = `${path}/change_email`;
        const change_password = `${path}/change_password`;
        const edit_detail_url = `${path}/change_detail`;

        // auth Reducer
        const {auth} = this.props;

        return (  
            <React.Fragment>
                <DashboardContainer>

                    <section className="py-2 my-auto mb-5 user-account">
                        <div className="row mb-0">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-start">
                                    {auth.user && (auth.user.profile.photo ? 
                                        (<img className="img-fluid rounded-circle square-crop" src={`${auth.user.profile.photo}`} />)
                                    : (
                                        <div className="default-pic">
                                            <FontAwesomeIcon icon={faUserAstronaut} />
                                        </div>
                                    ))}
                                
                                    <div className="ml-2 my-auto"> 
                                        <h5 className="mb-0">{auth.user ? `${auth.user.first_name}`+` ${auth.user.last_name}` : ''}</h5>
                                        <p className="small mt-0 mb-0">@{auth.user ? `${auth.user.username}` : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div id="account">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-normal">Email : {auth.user ? `${auth.user.email}` : ''}</h6>
                                <Link href={change_email_url}>
                                    <a className="font-weight-normal">
                                        Ubah Email
                                    </a>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-normal">Password : *******</h6>
                                <Link href={change_password}>
                                    <a className="font-weight-normal">
                                        Ubah Password
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div id="account-details">
                            <div className="d-flex justify-content-between">
                                <h6>{auth.user ? `${auth.user.first_name}`+` ${auth.user.last_name}` : ''}</h6>
                                <Link href={edit_detail_url}>
                                    <a className="font-weight-normal">
                                        Ubah Detil
                                    </a>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between text-secondary">
                                <h6 className="font-weight-normal">
                                    Mulai Menggunakan halobisnis Pada {auth.user ? `${auth.user.date_joined}` : ''}
                                    </h6>
                            </div>
                            <div className="d-flex justify-content-between text-secondary">
                                <h6 className="font-weight-normal mr-2">Loyality Points <span className="badge-pill badge-primary">{auth.user ? `${auth.user.profile.loyal_point}` : ''}</span></h6>
                            </div>
                        </div>
                        <hr/>
                    </section>
                </DashboardContainer>                
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    auth : state.authReducer
})

export default connect(MapStateToProps, { userLoad })(withRouter(UserAccountComponent));