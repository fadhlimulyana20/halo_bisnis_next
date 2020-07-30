import React, { Component } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';

import { connect } from 'react-redux';

import { userLogin } from '../redux/actions/auth';

class Signin extends Component {
  state = {
    username : '',
    password : ''
  }

  componentDidMount(){
    const {isAuthenticated} = this.props.auth;
    const {query} = this.props.router;
    console.log(query.next);

    if (isAuthenticated && query.next) {
      Router.push(query.next);
    }else if (isAuthenticated){
      Router.push(query.next);
    }
  }

  componentDidUpdate(){
    const {isAuthenticated} = this.props.auth; 

    const {query} = this.props.router;
    console.log(query.next);

    if (isAuthenticated && query.next) {
      Router.push(query.next);
    }else if (isAuthenticated){
      Router.push(query.next);
    }
  }

  // handle change of form
  handleChange = (event) =>{
    this.setState({[event.target.id]: event.target.value});
  }

  // handle submit for submit data to auth API
  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.userLogin(this.state.username, this.state.password);
  }

  render() {
    const error_message = ''
    const { isLoading, isAuthenticated } = this.props.auth;

    return (
        <React.Fragment>
          <Head>
            <title>Sign In | HaloBisnis.id</title>
          </Head>
          <div className="header-section" id="pricing-header">
            <div className="container mt-5 mb-0 header-text">
              <h1 className="h2">Masuk ke Akun</h1>
            </div>
          </div>
          <div className="container d-flex justify-content-center py-5">
            <div className="form-auth shadow d-flex align-items-center">
              <form className="w-100" onSubmit={this.handleSubmit}>
                <div className="mx-auto mb-4 form-brand">
                  <img src="/halobisnis.png" className="img-fluid" />
                </div>
                <div className="form-group mb-3">
                  <input type="text" className="form-control rounded-pill text-center" id="username" aria-describedby="emailHelp" placeholder="Username" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control rounded-pill text-center" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                {error_message}
                <div className="d-flex justify-content-between small">
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <a href="" >Lupa Password?</a>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-mediumaquamarine rounded-pill py-2 px-5 font-weight-bold shadow" disabled={isLoading}>
                    {isLoading ? (
                      <div className="text-center">
                        <span className="spinner-grow spinner-grow-sm mr-2" role="status">
                        </span>
                        <span className="my-auto">Loading...</span>
                      </div>
                    ): (
                      <span>Masuk</span>
                    )}
                  </button>
                </div>
                <hr className="mt-4"></hr>
                <div className="d-flex justify-content-between small">
                  <p>Belum Punya Akun?</p>
                  <Link href="/signup" >
                    <a>Buat Akun Sekarang</a>
                  </Link>
                </div>
              </form>
            </div>   
          </div>
        </React.Fragment>
    );
  }
}

const MapStateToProp = state =>({
  auth : state.authReducer
})

export default connect(MapStateToProp, {userLogin})(withRouter(Signin));