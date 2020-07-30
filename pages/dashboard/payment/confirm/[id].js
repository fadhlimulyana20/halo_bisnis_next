import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadPaymentMethod, loadPaymentAccount, makePayment } from '../../../../redux/actions/payment';

import { invoiceDetailLoad } from '../../../../redux/actions/invoice';

import DashContainer from '../../../../components/dashboard/container';

import Select from "react-select";

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { withRouter } from 'next/router';

import Skeleton from 'react-loading-skeleton';

import { Link as ScrollLink } from 'react-scroll';

import SingleFileUpload from '../../../../components/common/singleFileUpload';

class PaymentConfirmComponent extends Component {
    state = {  
        selectedOption : [],
        selectedAccount : '',
        name : '',
        bank : '',
        account_number : '',
        grand_total : '',
        copied : false,
        selected_files : ''
    }

    componentDidMount(){
        this.props.loadPaymentMethod();
    }
    
    UNSAFE_componentWillMount(){
        const {invoice, router} = this.props;
        const {query} = router;
        this.props.invoiceDetailLoad(query.id);
    }


    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        let id = selectedOption.id;
        // console.log(id);
        this.props.loadPaymentAccount(id);
        // console.log(`Option selected:`, selectedOption);
    }

    handleChangeAccount = (selectedOption) => {
        this.setState({ selectedAccount : selectedOption });
        let id = selectedOption.id;
        this.props.loadPaymentAccount(id);
        // console.log(`Option selected:`, selectedOption);
    }

    handleChangeForm = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleCopy = () =>{
        const {invoice} = this.props;
        const text = invoice ? invoice.invoice_detail.total_bills : '' 
        document.execCommand("copy");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {selectedOption, bank, account_number, name, selectedAccount} = this.state;
        const method_id = selectedOption.id;
        const payment_to = selectedAccount.id;
        const {invoice} = this.props;
        const invoice_id = invoice.invoice_detail.id;

        this.props.makePayment(method_id, bank, account_number, name, payment_to, invoice_id);
    } 

    handleFile = event => {
        this.setState({
            selected_files : event.target.files[0]
        })
        console.log(event.target.files[0]);
    }
    

    render() { 
        const {invoice} = this.props;
        const {payment} = this.props;
        const option = payment ? payment.payment_method.map(item => {
            return({
                id : item.id,
                value : item.name,
                label : item.name
            })
        }) : '';

        const option_account = payment ? payment.payment_account.map(item => {
            return({
                id : item.id,
                value : item.__str__,
                label : item.__str__
            })
        }) : '';

        const status = {
            waiting : (<h6 className="text-primary">Menunggu Konfirmasi</h6>),
            paid : (<h6 className="text-success">Terbayar</h6>),
            unpaid : (<h6 className="text-danger">Belum Terbayar</h6>)
        }

        const show_status = () => {
            if (invoice.invoice_detail && invoice.invoice_detail.payment && !invoice.invoice_detail.is_paid) {
                return status.waiting;
            }else if (invoice.invoice_detail && invoice.invoice_detail.is_paid){
                return status.paid;
            }else if(invoice.invoice_detail && !invoice.invoice_detail.is_paid){
                return status.unpaid;
            }else {
                return (<Skeleton />)
            }
        }

        return (  
            <React.Fragment>
                <DashContainer>

                    <section className="py-4 mb-4">
                        <h5>Tagihan Pembayaran </h5>
                        <hr/>
                        <div className="card">
                            <h6 className="card-header">Rincian Tagihan</h6>
                            <div className="card-body">
                                <div className="text-center">
                                    <h6>Bayar Sebelum</h6>
                                    <h5 className="text-warning">{invoice.invoice_detail ? invoice.invoice_detail.due_at : (<Skeleton/>)}</h5>
                                </div>

                                <p className="mb-0">Nomor Invoice</p>
                                {/* <h6 className="mb-3">{invoice ? invoice.invoice_detail.__str__ : '' }</h6> */}
                                <p className="mb-0">Total Tagihan</p>
                                <div className="d-flex justify-content-between mt-0">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-aquamarine" id="basic-addon1">Rp.</span>
                                        </div>
                                        <input type="text" className="form-control" value={invoice.invoice_detail ? invoice.invoice_detail.total_bills : '' } disabled/>
                                    </div>
                                    <CopyToClipboard text={invoice.invoice_detail ? invoice.invoice_detail.total_bills : '' }
                                        onCopy={() => this.setState({copied: true})}>
                                        <button className="btn btn-link">Salin</button>
                                    </CopyToClipboard>
                                </div>
                                {this.state.copied ? <span className="text-secondary small">Copied.</span> : null}
                                <div className="py-4">
                                    {show_status()}
                                </div>
                                {invoice.invoice_detail && !invoice.invoice_detail.payment && !invoice.invoice_detail.is_paid && (
                                <div className="d-flex justify-content-end">
                                    <ScrollLink 
                                        to="confirmation" 
                                        duration={500}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        className="btn btn-sm btn-outline-secondary font-weight-bold rounded-pill">
                                            Konfirmasi Pembayaran
                                    </ScrollLink>
                                </div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="py-4">

                        <h5>Metode Pembayaran</h5>
                        <hr/>
                        <div className="accordion" id="paymentmethod">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Transfer
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#paymentmethod">
                                    <div className="card-body">
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
                    </section>
                    
                    {invoice.invoice_detail && invoice.invoice_detail.payment ? ('') : (

                    <section className="py-4" id="confirmation">
                        <h5>Konfirmasi Pembayaran</h5>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="inputState">Metode</label>
                                        <Select 
                                            options={option} 
                                            onChange={this.handleChange}    
                                        />
                                        {/* <select id="inputState" className="form-control" onChange={this.handleChange} value={this.state.selectedOption.name}>
                                            <option>...</option>
                                            {payment ? payment.payment_method.map(item => {
                                                return (
                                                <option value={item} id={item.id}>{item.name}</option>
                                                )
                                            }) : ''}
                                        </select> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Nama Rekening</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={this.handleChangeForm} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Nama Bank</label>
                                        <input type="text" className="form-control" id="bank" aria-describedby="emailHelp" onChange={this.handleChangeForm} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">No Rekening</label>
                                        <input type="text" className="form-control " id="account_number" aria-describedby="emailHelp" onChange={this.handleChangeForm} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="inputState">No Rekening Tujuan</label>
                                        <Select 
                                            options={option_account} 
                                            onChange={this.handleChangeAccount}    
                                        />
                                    </div>
                                    <h6 className="pt-3 font-weight-normal">Upload Bukti Transfer</h6>
                                    <SingleFileUpload onChange={this.handleFile}/>
                                    {/* <ImageUpload /> */}
                                </div>
                            </div>
                            <div className="row py-4">
                                <div className="col-md-4 mx-auto">
                                    <button type="submit" className="btn btn-block btn-secondary py-2 font-weight-bold rounded-pill" disabled={payment.is_making_payment}>
                                        {payment.is_making_payment ? (
                                            <div class="text-center">
                                                <span class="spinner-grow spinner-grow-sm mr-2" role="status">
                                                </span>
                                                <span className="my-auto">Loading...</span>
                                            </div>   
                                        ): (
                                            <span>Kirim</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    )}
                </DashContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state =>({
    payment : state.paymentReducer,
    invoice : state.invoiceReducer,
});

export default connect(MapStateToProps, {loadPaymentMethod, loadPaymentAccount, makePayment, invoiceDetailLoad})(withRouter(PaymentConfirmComponent));