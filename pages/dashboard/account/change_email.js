import React, { Component } from 'react';

import { connect } from 'react-redux';

import { userLoad, userEditEmail } from '../../../redux/actions/auth';

import DashoardContainer from '../../../components/dashboard/container';

class ChangeEmail extends Component {
    state = {  
        old_email : '',
        email : '',
        password : '',
        is_password_match : false,
        are_fields_empty : true,
        message : null,
        redirect : false,
    }

    componentDidMount(){
        this.props.userLoad();

        const {auth} = this.props;
        auth.user && (this.setState({
            email : auth.user.email,
            old_email : auth.user.email
        }));
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }


    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        this.props.userEditEmail(email, password);
    }

    componentWillReceiveProps(nextProps){
        
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
                    Email Berhasil Diubah
                </div>
            </React.Fragment>
        );
        
        const {update_user, user} = nextProps.auth;
        const status = update_user ? update_user.status : '';
        console.log(nextProps);

        if(status && status === 400){
            this.setState({message : wrong_password})
        }else if(user.email !== this.state.old_email){
            this.setState({
                message : success,
                redirect : true
            });
        }else{
            this.setState({message : ''})
        }

    }

    render() { 
        const {email, password} = this.state;
        const button_disabled = email.length > 0 && password.length > 0 ? false : true;

        // if(this.state.redirect){
        //     return (
        //         <Redirect to="user-area/account" />
        //     )
        // }

        return (  
            <React.Fragment>
                <DashoardContainer>
                    
                    <h5>Ubah Email</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control rounded-pill" id="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label >
                            <div className="col-sm-10">
                                <input type="password" className="form-control rounded-pill" id="password" onChange={this.handleChange} value={this.state.password} />
                            </div>
                        </div>
                        {this.state.message}
                        <div className="row mt-4">
                            <div className="col-md-3 ml-auto">
                                <button type="submit" className={`btn btn-block btn-secondary px-4 py-2 rounded-pill`} disabled={button_disabled}>Simpan</button>
                            </div>
                        </div>
                    </form>
                </DashoardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    auth : state.authReducer
});

export default connect(MapStateToProps, { userEditEmail, userLoad })(ChangeEmail);