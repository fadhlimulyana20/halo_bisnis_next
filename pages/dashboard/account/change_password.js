import React, { Component } from 'react';

import DashoardContainer from '../../../components/dashboard/container';

import { connect } from 'react-redux';

import { changePassword, userLoad } from '../../../redux/actions/auth';

class ChangePassword extends Component {
    state = {  
        old_password : '',
        new_password : '',
        new_password_confirm : '',
        message : ''

    }

    
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    componentWillReceiveProps(nextProps) {
        const wrong_password = (
            <React.Fragment>
                <div className="alert alert-danger" role="alert">
                    Password Anda Salah
                </div>
            </React.Fragment>
        );
  
        const success = (
            <React.Fragment>
                <div className="alert alert-success" role="alert">
                    Password Berhasil Diubah
                </div>
            </React.Fragment>
        );

        // const { change_password } = nextProps.auth;
        const change_password = '';
        console.log(nextProps);
  
        if (change_password && change_password.status === 400){
            return ({message : wrong_password})
        }else if (change_password && change_password.status === 200){
            return ({message : success})
        }else {
            return ({message : ''})
        }
        
    }

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {old_password, new_password} = this.state;

        this.props.changePassword(old_password, new_password);
    }
    
    render() { 
        const {old_password, new_password, new_password_confirm} = this.state;
        const disabled_button = old_password.length > 0 && new_password.length > 0 && new_password_confirm.length > 0 && new_password === new_password_confirm && old_password !== new_password ? false : true;

        const is_old_same = old_password.length > 0 && new_password.length > 0 && old_password === new_password;
        const is_new_different = new_password.length > 0 && new_password_confirm.length > 0 && new_password !== new_password_confirm;

        const text_old_same = (
            <React.Fragment>
                <small className="form-text text-danger">
                    Password baru tidak boleh sama dengan password lama.
                </small>
            </React.Fragment>
        );

        const text_new_different = (
            <React.Fragment>
                <small className="form-text text-danger">
                    Password baru tidak sama.
                </small>
            </React.Fragment>
        );

        const {message} = this.state;

        return (  
            <React.Fragment>
                <DashoardContainer>

                    <h5>Ubah Password</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                            <label for="old_password" className="col-sm-2 col-form-label">Password Lama</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="old_password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="new_password" className="col-sm-2 col-form-label">Password Baru</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="new_password" onChange={this.handleChange}/>
                                {is_old_same && text_old_same}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="password_confirm" className="col-sm-2 col-form-label">Konfirmasi Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="new_password_confirm" onChange={this.handleChange}/>
                                {is_new_different && text_new_different}
                            </div>
                        </div>
                        {message}
                        <div className="row mt-4">
                            <div className="col-md-3 ml-auto">
                                <button type="submit" className="btn btn-block btn-secondary px-4 py-2 rounded-pill" disabled={disabled_button}>Simpan</button>
                            </div>
                        </div>
                    </form>
                </DashoardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    auth : state.authReducers,
})

export default connect(MapStateToProps, {changePassword, userLoad})(ChangePassword);