import React, { Component } from 'react';
import DashboardContainer from '../../../components/dashboard/container';

import { connect } from 'react-redux';

import { createProject } from '../../../redux/actions/project';
import { loadServiceType } from '../../../redux/actions/service';

import { Modal } from 'react-bootstrap';

import Link from 'next/link';
 
import Select from 'react-select';

import SingleFileUpload from '../../../components/common/singleFileUpload';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faReact } from '@fortawesome/free-brands-svg-icons';

class CreateProject extends Component {
    state = {  
        project_name : '',
        project_for : '',
        project_desc : '',
        technology : '',
        selected_files : null,
        modal_confirm_show : false,
    }

    componentDidMount(){
        this.props.loadServiceType()
    }

    handleChange = (event) =>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleFile = event => {
        this.setState({
            selected_files : event.target.files[0]
        })
        console.log(event.target.files[0]);
    }

    handleSelectFor = (selectedOption) => {
        this.setState({project_for : selectedOption});
    }

    handleSelect = changeEvent => {
        this.setState({technology : changeEvent.target.value});
        console.log(changeEvent.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {project_name, project_desc, project_for, technology, selected_files} = this.state;
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append( 
            "design", 
            selected_files,
            selected_files.name, 
        ); 
        formData.append( 
            "name",
            project_name 
        ); 
        formData.append( 
            "description",
            project_desc
        ); 
        formData.append( 
            "service",
            project_for.id 
        ); 
        formData.append( 
            "technology",
            technology 
        ); 
        
        console.log(formData);
        
        this.props.createProject(formData);
        this.setState({modal_confirm_show : true});
    }

    render() {
        const {service} = this.props;
        const service_type = service.service_type;

        const option = service_type ? service_type.map(item => {
            return({
                id : item.id,
                value : item.description,
                label : item.name

            })
        }) : '';

        const {project_for} = this.state;
        const description_for = project_for ? (
            <div className="alert alert-secondary mt-2" role="alert">
                {project_for.value}
            </div>
        ) : '';

        const {project} = this.props;

        const {modal_confirm_show} = this.state;
        const new_project_id = project.project_detail ? project.project_detail.id : '';

        const modal_confirm = (
            <React.Fragment>
                <Modal show={modal_confirm_show} centered={true} size="md">
                    <Modal.Header>
                        <Modal.Title>Sukses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Project berhasil dibuat. Project anda selanjutnya akan direview dan dibuatkan tagihan pembayaran oleh tim HaloBisnis.id</Modal.Body>
                    <Modal.Footer>
                        <Link href={`/dashboard/project/detail/${new_project_id}`}> 
                            <a className="btn btn-mediumaquamarine font-weight-bold">
                                OK
                            </a>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );

        return (  
            <React.Fragment>
                <DashboardContainer>

                    {modal_confirm}
                    <section className="">
                        <h5>Buat Project</h5>
                        <hr className="mt-0"/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <div className="form-group">
                                        <label for="project_name">Nama Project</label>
                                        <input type="text" className="form-control rounded" id="project_name" aria-describedby="project_name" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="project_for">Kegunaan</label>
                                        {/* <input type="text" className="form-control rounded-pill" id="project_for" aria-describedby="project_for" onChange={this.handleChange} /> */}
                                        <Select 
                                            options={option} 
                                            onChange={this.handleSelectFor}    
                                        />
                                        {description_for}
                                    </div>
                                    <div className="form-group">
                                        <label for="project_desc">Deskripsi</label>
                                        <textarea className="form-control" id="project_desc" rows="5" onChange={this.handleChange} ></textarea>
                                    </div>
                                    {/* <button type="submit" className="btn btn-primary">Submit</button>     */}
                                </div>
                                <div className="col-md-6 mt-2"> 
                                    <div className="mb-4">
                                        <h6 className="font-weight-normal">Pilih Teknologi</h6>
                                        <div className="d-flex align-content-start flex-wrap btn-group btn-group-toggle">
                                            <label className={`btn btn-outline-secondary shadow font-weight-bold`+(this.state.technology === '2' ? ' active' : '')}>
                                                <input type="radio" name="options" value="2" checked={this.state.technology === '2'} onChange={this.handleSelect} /> 
                                                <h1><FontAwesomeIcon icon={faWordpress} /></h1> 
                                                <h6>Wordpress</h6>
                                            </label>
                                            <label className={`btn btn-outline-secondary shadow font-weight-bold`+(this.state.technology === '1' ? ' active' : '')}>
                                                <input type="radio" name="options" value="1" checked={this.state.technology === '1'} onChange={this.handleSelect} /> 
                                                <h1><FontAwesomeIcon icon={faReact}/></h1>
                                                <h6>React</h6>
                                            </label>
                                        </div>
                                    </div>
                                    <h6 className="font-weight-normal">Upload File Design</h6>
                                    <SingleFileUpload text="Upload file design CDR/AI/EPS dan lain-lain yang sudah diarsipkan dalam file zip/rar/7z" onChange={this.handleFile} />
                                </div>
                            </div>
                            <div className="row no-gutters mt-4 mb-4">
                                <div className="col-md-2 mx-auto">
                                    <button type="submit" className="btn btn-secondary btn-block rounded-pill font-weight-bold py-2" disabled={project.is_create_project}>
                                        {project.is_create_project ? (
                                            <div className="text-center">
                                                <span className="spinner-grow spinner-grow-sm mr-2" role="status">
                                                </span>
                                                <span className="my-auto">Loading...</span>
                                            </div>
                                        ): (
                                            <span>Buat Project</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    project : state.projectReducer,
    service : state.serviceReducer
})

export default connect(MapStateToProps, { createProject, loadServiceType })(CreateProject);