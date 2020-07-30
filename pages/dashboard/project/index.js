import React, { Component } from 'react';

import Link from 'next/link';

import { withRouter } from 'next/router';

import { connect } from 'react-redux';

import { loadProject } from '../../../redux/actions/project';

import DashboardContainer from '../../../components/dashboard/container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCode, faComment } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Skeleton from 'react-loading-skeleton';

import { Modal } from 'react-bootstrap';

class Project extends Component {
    state = {
        consultation_show : false
    }

    // componentDidMount(){
    //     this.props.loadProject();
    // }

    // handle modal consultation
    handleShow = () => {
        this.setState({consultation_show : true});
    }

    handleClose = () => {
        this.setState({consultation_show : false});
    }

    render() {
        // router
        const { router } = this.props;
        const path = router.pathname;

        // Link
        const create_url = `${path}/create-project`;
        const consultation_url = `${path}/consultation`;
        const sample_url = "/sample";

        // project
        const {project} = this.props;
        const project_list = project.project_list;

        const react = Object.assign([], project_list);
        const wordpress = Object.assign([], project_list);

        const react_project = react.length > 0 ? react.filter(element => element.technology === 1) : [];
        const wordpress_project = wordpress.length ? wordpress.filter(element => element.technology === 2) : [];

        const react_list = react_project.length ? react_project.map(react => {
            const sedang_diproses = <span className="text-primary">Sedang Diproses</span>;
            const belum_diproses = <span className="text-warning">Belum Diproses</span>;
            let status = '';
            if (react.is_processed){
                status = sedang_diproses
            }else {
                status = belum_diproses
            }
            return (
                <React.Fragment>

                    <div className="shadow-sm py-2 px-2 rounded mb-2 project-item">
                        <div className="d-flex">
                            <div className="flex-grow-1 p-2">
                                <p className="font-weight-bold mb-0">{react.name}</p>
                            </div>
                            <div className="p-2">
                                <p className="mb-0">{status}</p>
                            </div>
                            <div className="p-2">
                                <Link href={`${path}/detail/${react.id}`}>
                                    <a className="btn btn-sm btn-outline-secondary rounded-pill py-0 px-2">
                                        Lihat
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }) : (<h6 className="font-weight-normal">Tidak Ada</h6>);
        
        const wordpress_list = wordpress_project.length ? wordpress_project.map(wp => {
            const sedang_diproses = <span className="text-primary">Sedang Diproses</span>;
            const belum_diproses = <span className="text-warning">Belum Diproses</span>;
            let status = '';
            if (wp.is_processed){
                status = sedang_diproses
            }else {
                status = belum_diproses
            }
            return (
                <React.Fragment>
                    <div className="shadow-sm py-2 px-2 rounded mb-2 project-item">
                        <div className="d-flex">
                            <div className="flex-grow-1 p-2">
                                <p className="font-weight-bold mb-0">{wp.name}</p>
                            </div>
                            <div className="p-2">
                                <p className="mb-0">{status}</p>
                            </div>
                            <div className="p-2">
                                <Link href={`${path}/detail/${wp.id}`}>
                                    <a className="btn btn-sm btn-outline-secondary rounded-pill py-0 px-2">
                                        Lihat
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }) : (<h6 className="font-weight-normal">Tidak Ada</h6>);

        const { consultation_show } = this.state;

        const modal_consultaion = (
            <React.Fragment>
                <Modal show={consultation_show} centered={true} size="md" onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Konsultasi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Sebelum memulai project, anda bisa berkonsultasi terlebih dahulu dengan kami. 
                    </Modal.Body>
                    <Modal.Footer>
                        <a className="btn btn-mediumaquamarine font-weight-bold">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                            Konsultasi dengan WA
                        </a>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );

        return (
            <React.Fragment>
                {modal_consultaion}
                <DashboardContainer className="pb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="/Create-bro.png" />
                        </div>
                        <div className="col-md-8 my-auto">
                            <h3>Project</h3>
                            <p>Project adalah pesanan pembuatan markup web atau aplikasi dan pembuatan web atau aplikasi sepenuhnya dari konsumen ke halobisnis.id. Programmer kami akan mengubah design yang disodorkan oleh konsumen menjad produk jadi yang diinginkan oleh konsumen.</p>
                        </div>
                    </div>
                    <div className="">
                        <Link href={create_url}>
                            <a className="btn btn-mediumaquamarine rounded-pill m-2 py-2 font-weight-bold shadow">
                                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                Buat project
                            </a>
                        </Link>
                        <Link href={sample_url}>
                            <a className="btn btn-outline-secondary rounded-pill m-2 py-2 font-weight-bold">
                                <FontAwesomeIcon icon={faCode} className="mr-2" />
                                Lihat Contoh
                            </a>
                        </Link>
                        <button className="btn btn-outline-secondary rounded-pill m-2 py-2 font-weight-bold" onClick={this.handleShow}>
                            <FontAwesomeIcon icon={faComment} className="mr-2" />
                            Konsultasi
                        </button>
                    </div>
                    <div className="alert alert-warning my-2 py-4 mb-4" role="alert">
                        <ul className="my-auto">
                            <li>Klik Buat Project Untuk Memulai Project.</li>
                            <li>Kami Juga menyediakan contoh untuk gambaran.</li>
                            <li>Anda juga bisa berkonsultasi dengan kami terlebih dahulu.</li>
                        </ul>
                    </div>
                    
                    <section className="py-2 my-auto mb-5 mt-2 ">
                        <h5>React Project</h5>
                        <hr className="mt-0"></hr>
                        {project.is_load_project ? (<Skeleton count={3} />) : react_list}
                    </section>

                    <section className="py-2 my-auto mb-5">
                        <h5>Wordpress Project</h5>
                        <hr className="mt-0"></hr>
                        {project.is_load_project ? (<Skeleton count={3} />) : wordpress_list}
                    </section>
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    project : state.projectReducer
})

export default connect(MapStateToProps, {loadProject})(withRouter(Project));