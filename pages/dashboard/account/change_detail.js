import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeUser } from '../../../redux/actions/auth';

import DashoardContainer from '../../../components/dashboard/container';

class ChangeDetailComponent extends Component {
    state = {  
        first_name : '',
        last_name : '',
        message : '',
    }

    componentDidUpdate(nextProps){
        const success = (
            <React.Fragment>
                <div className="alert alert-success" role="alert">
                    Detail Berhasil Diubah
                </div>
            </React.Fragment>
        );

        if(nextProps.auth.user !== this.props.auth.user){
            this.setState({message : success})
        }
    }

    componentDidMount(){
        const {auth} = this.props;
        const user = auth.user;
        const {first_name, last_name} = user;

        this.setState({
            first_name : first_name,
            last_name : last_name
        })
    }

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {first_name, last_name} = this.state;

        this.props.changeUser(first_name, last_name);
    }

    render() { 
        const {first_name, last_name, message} = this.state;
        
        return (  
            <React.Fragment>
                <DashoardContainer>

                    <h5>Ubah Detail</h5>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label for="old_password" className="col-sm-2 col-form-label">Nama Depan</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control rounded-pill" id="first_name" value={first_name} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="new_password" className="col-sm-2 col-form-label">Nama Belakang</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control rounded-pill" id="last_name" value={last_name} onChange={this.handleChange} />
                            </div>
                        </div>
                        {message}
                        <div className="row mt-4">
                            <div className="col-md-3 ml-auto">
                                <button type="submit" className="btn btn-block btn-secondary px-4 py-2 rounded-pill">Simpan</button>
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
})

export default connect(MapStateToProps, {changeUser})(ChangeDetailComponent);