import React, { Component } from 'react';

import Router from 'next/router';

import DashboardContainer from '../../components/dashboard/container';

import { connect } from 'react-redux';

class Dashboard extends Component {
    // componentDidMount(){
    //     // from authReducer
    //     const {isAuthenticated} = this.props.auth;

    //     if(!isAuthenticated){
    //         Router.push({
    //             pathname: '/signin',
    //             query: {next: '/dashboard'}
    //         });
    //     }
    // }

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <DashboardContainer>
          <section className="py-2 my-auto mb-5">
            <h5>Gambaran Umum</h5>
            <hr className="mt-0"></hr>
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="overview-box bg-mediumspringgreen shadow">
                        <div className="align-items-center h-100">
                            <div className="d-flex justify-content-center">
                                {/* <h1 className="mb-0">{product.user_product.length}</h1> */}
                            </div>
                        </div>
                        <div className="align-items-end">
                            <div className="d-flex justify-content-center mt-2">
                                <p className="mb-0">Tema</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="overview-box bg-mediumspringgreen shadow">
                        <div className="align-items-center h-100">
                            <div className="d-flex justify-content-center">
                                {/* <h1 className="mb-0">{project.project_list.length} </h1> */}
                            </div>
                        </div>
                        <div className="align-items-end">
                            <div className="d-flex justify-content-center mt-2">
                                <p className="mb-0">Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="overview-box bg-mediumspringgreen shadow">
                        <div className="align-items-center h-100">
                            <div className="d-flex justify-content-center">
                                {/* <h1 className="mb-0">{invoices.length}</h1> */}
                            </div>
                        </div>
                        <div className="align-items-end">
                            <div className="d-flex justify-content-center mt-2">
                                <p className="mb-0">Tagihan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="overview-box bg-mediumspringgreen shadow">
                        <div className="align-items-center h-100">
                            <div className="d-flex justify-content-center">
                                <h1 className="mb-0">1</h1>
                            </div>
                            <div className="align-items-end">
                                <div className="d-flex justify-content-center mt-2">
                                    <p className="mb-0">Kit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section className="py-2 my-auto mb-4">
            <div className="d-flex justify-content-between">
                <h5 className="mb-0">Loyality Points</h5>
                <h5 className="badge badge-primary badge-pill my-auto mb-0">
                    {user ? user.profile.loyal_point : ''}
                </h5>
            </div>
            <hr className="mt-0"></hr>
            <div className="section-content">
                <p>Loyality poin adalah program dari halobisnis atas kesetian pelanggan menggunakan produk dan jasa dari halobisnis.id. Poin yang terkumpul dapat digunakan untuk mendapatkan manfaat seperti promosi, diskon, dll dari halobisnis..id</p>
            </div>
          </section>

          <section className="py-2">
            <h5>Tiket</h5>
            <hr className="mt-0"></hr>
            <div className="section-content table-responsive">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </section>
        </DashboardContainer>
      </React.Fragment>
    );
  }
}

const MapStateToProps = state => ({
  auth : state.authReducer
})

export default connect(MapStateToProps)(Dashboard);