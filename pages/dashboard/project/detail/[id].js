import React, { Component } from 'react';

import { withRouter } from 'next/router';

import { connect } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

import { loadProjectDetail } from '../../../../redux/actions/project';

import DashboardContainer from '../../../../components/dashboard/container';

class ProjectDetailComponent extends Component {
    state = {  }
    
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component ? await Component.getInitialProps(ctx) : {};
      
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }
    
    componentDidMount(){
        const { query } = this.props.router;
        const id = query.id;
        // this.props.loadProjectDetail(id);
    }



    render() {
        const {project} = this.props;
        const project_detail = project.project_detail;
        const is_processed = project_detail ? project_detail.is_processed : '';

        let status = '';
        if (is_processed){
            status = <p className="text-primary mb-0">Sedang Diproses</p>
        }else {
            status = <p className="text-warning mb-0">Belum Diproses</p>
        }

        return (  
            <React.Fragment>
                <DashboardContainer>

                    <div className="d-flex justify-content-between">
                        <h5>Detail Project</h5>
                        <a href={project_detail ? project_detail.design : ''} >Lihat Design</a>
                    </div>
                    <hr />
                    {project.is_load_project_detail ? (<Skeleton count={5} height={10}/>) : (
                        <React.Fragment>
                            <div className="d-flex border-bottom">
                                <div className="p-2 font-weight-bold">
                                    Nama
                                </div>
                                <div className="p-2 flex-grow-1">
                                    {project.project_detail ? project.project_detail.name : ''}
                                </div>
                            </div>
                            <div className="d-flex border-bottom">
                                <div className="p-2 font-weight-bold">
                                    Teknologi
                                </div>
                                <div className="p-2 flex-grow-1">
                                    {project.project_detail ? project.project_detail.technology.name : ''}
                                </div>
                            </div>
                            <div className="d-flex border-bottom">
                                <div className="p-2 font-weight-bold">
                                    Deskripsi
                                </div>
                                <div className="p-2 flex-grow-1">
                                    {project.project_detail ? project.project_detail.description : ''}
                                </div>
                            </div>
                            <div className="d-flex border-bottom">
                                <div className="p-2 font-weight-bold">
                                    Status
                                </div>
                                <div className="p-2 flex-grow-1">
                                    {status}
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    project : state.projectReducer
})

export default connect(MapStateToProps, {loadProjectDetail})(withRouter(ProjectDetailComponent))