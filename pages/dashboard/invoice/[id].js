import React, { Component } from 'react';

import { withRouter } from 'next/router';
import Link from 'next/link';

import { connect } from 'react-redux';

import { invoiceDetailLoad } from '../../../redux/actions/invoice';

import DashboardContainer from '../../../components/dashboard/container';

class InvoiceDetailComponent extends Component {
    componentDidMount(){
        const { query } = this.props.router;

        this.props.invoiceDetailLoad(query.id);
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() { 
        const {invoice} = this.props;
        const invoice_detail = invoice.invoice_detail;
        const invoice_item = invoice.invoice_item;

        const {is_loading} = invoice;

        let sub_total = 0;
        let grand_total = 0;
        let discount_total = 0;

        const status = invoice_detail ? invoice_detail.is_paid : false;

        // const status_text = status ? (
        //     <h6 className="text-right"><span className="badge-pill badge-success text-white">Terbayar</span></h6>
        // ): (
        //     <h6 className="text-right"><span className="badge-pill badge-warning text-white">Belum Dibayar</span></h6>
        // )


        

        const item_list = is_loading ? '' : invoice_item.map((item, index) => {
            let discount = parseInt(item.total)*parseFloat(item.discount);
            discount_total += discount;
            grand_total += parseInt(item.total) - discount;
            sub_total += parseInt(item.total)
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.product.name}</td>
                    <td>{parseInt(item.product.price)}</td>
                    <td>{parseInt(item.amount)}</td>
                    <td>{parseFloat(item.discount)*100}%</td>
                    <td>{parseInt(item.total)-discount}</td>
                </tr>
            )
        })

        return (  
            <React.Fragment>
                <DashboardContainer>

                    {/* {is_loading ? (<Skeleton />) : '' } */}
                    <div className="min-paper">
                        <div className="header-section bg-light px-3">
                            <div className="row no-gutters">
                                <div className="col-6">
                                    <img className="img-fluid invoice-brand" src="/halobisnis.png" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h2 className="text-right mb-0">Invoice</h2>
                                    <p className="text-secondary text-right mb-0 small">Nomor : {invoice_detail ? invoice_detail.__str__ : ''}</p>
                                    <p className="text-secondary text-right mb-0 small">Tanggal : {invoice_detail ? invoice_detail.created_at : ''}</p>
                                    <p className="text-secondary text-right mb-0 small">Jatuh Tempo : {invoice_detail ? invoice_detail.due_at : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <h6>Tagihan Untuk : </h6>
                                    <div className="row no-gutters">
                                        <div className="col-md-2">
                                            <p className="mt-0 mb-0 text-secondary">Nama :</p>
                                        </div>
                                        <div className="col-md-9">
                                            <p className="mt-0 mb-0">{invoice_detail ? `${invoice_detail.user.first_name}`+` ${invoice_detail.user.last_name}` : ''}</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-md-2">
                                            <p className="mt-0 mb-0 text-secondary">Email :</p>
                                        </div>
                                        <div className="col-md-10">
                                            <p className="mt-0 mb-0">{invoice_detail ? invoice_detail.user.email : ''}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {status ? (
                                        <h6 className="text-right"><span className="badge-pill badge-success text-white">Terbayar</span></h6>
                                    ):(
                                        <h6 className="text-right"><span className="badge-pill badge-warning text-white">Belum Dibayar</span></h6> 
                                    )}
                                </div>
                            </div>
                            <div className="table-responsive mt-4">
                                <table className="table table-sm table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama Produk</th>
                                            <th scope="col">Harga Unit</th>
                                            <th scope="col">Jumlah</th>
                                            <th scope="col">Potongan</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item_list}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 row no-gutters">
                                <div className="col-8 ml-auto text-right">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Sub Total : {sub_total}</li>
                                        <li class="list-group-item">Diskon Total : {discount_total}</li>
                                        <li class="list-group-item">
                                            <span className="badge-pill badge-secondary">
                                                Total : Rp. {grand_total}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row py-4 no-gutters">
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                                <div className="col-6 mx-auto">
                                    <Link href={`/dashboard/payment/confirm/invoice=${invoice_detail ? invoice_detail.id : ''}`}>
                                        <a className="btn btn-secondary btn-block py-2 rounded-pill font-weight-bold">
                                            Bayar
                                        </a>
                                    </Link>
                                    {/* <button className="btn btn-secondary btn-block py-2 rounded-pill font-weight-bold">Bayar</button> */}
                                </div>
                                {/* <div className="col-6">
                                    <PDFDownloadLink className="btn btn-outline-secondary btn-block py-2 rounded-pill font-weight-bold" document={<InvoicePDF id={id} name="fadhli" email="me@emailku.com" />} fileName={`invoice_${id}.pdf`}>
                                        Download PDF
                                    </PDFDownloadLink>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    invoice : state.invoiceReducer
});

export default connect(MapStateToProps, {invoiceDetailLoad})(withRouter(InvoiceDetailComponent));