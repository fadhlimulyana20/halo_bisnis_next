import Link from 'next/link';
import { withRouter } from 'next/router';

import DashboardContainer from '../../../components/dashboard/container';

import { connect } from 'react-redux';

import React, { Component } from 'react';

import { invoiceLoad } from '../../../redux/actions/invoice';

class Invoice extends Component {
    componentDidMount(){
        this.props.invoiceLoad();
    }

    invoiceStatus = bool => {
        if(bool){
            return (<span className="text-success">Terbayar</span>)
        }else{
            return (<span className="text-warning">Belum Dibayar</span>)
        }
    }

    render() {
        const { router } = this.props;
        const path = router.pathname;

        let {invoices} = this.props.invoice;
        let invoice_list = invoices.length ?  invoices.map((invoice, index) => {
            let status = this.invoiceStatus(invoice.is_paid);
            return (
                <React.Fragment>
                    <tbody>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>
                                <Link href={`${path}/${invoice.id}`}>
                                    {invoice.__str__}
                                </Link>
                            </td>
                            <td>{invoice.created_at}</td>
                            <td>{invoice.due_at}</td>
                            <td>{status}</td>
                        </tr>
                    </tbody>
                </React.Fragment>
            )
        }) : ''; 
        return (
            <React.Fragment>
                <DashboardContainer>
                    <section className="py-2">
                        <h5>Tagihan</h5>
                        <hr className="mt-0"></hr>
                        <div className="section-content table-responsive">
                            <table className="table table-sm table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Jatuh Tempo</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                {invoice_list}
                            </table>
                        </div>
                    </section> 
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    invoice : state.invoiceReducer
})

export default connect(MapStateToProps, {invoiceLoad})(withRouter(Invoice));