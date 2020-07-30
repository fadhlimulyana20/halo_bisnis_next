import React, { Component } from 'react';

import DashboardContainer from '../../../components/dashboard/container';

class Payment extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <DashboardContainer>

                    <h5>Pembayaran</h5>
                    <hr />
                    <div class="accordion" id="paymentmethod">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Transfer
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#paymentmethod">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <h5>Mandiri</h5>
                                            <div className="w-25">
                                                <img className="img-fluid" src="/mandiri.png" />
                                            </div>
                                            <h6 className="mb-0">No Rekening</h6>
                                            <p className="mb-0">1380015872950</p>
                                            <p className="mb-0">a/n CV Amanah Sehati</p>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <h5>BNI</h5>
                                            <div className="w-25">
                                                <img className="img-fluid" src="/BNI.png" />
                                            </div>
                                            <h6 className="mb-0">No Rekening</h6>
                                            <p className="mb-0">876157411</p>
                                            <p className="mb-0">a/n PT Amanah Sehati Mulia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Pembayaran Digital
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#paymentmethod">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </DashboardContainer>
            </React.Fragment>
        );
    }
}
 
export default Payment;