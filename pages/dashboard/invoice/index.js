import Router from 'next/router';

import DashboardContainer from '../../../components/dashboard/container';

import { connect } from 'react-redux';

import React, { Component } from 'react';

class Invoice extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardContainer>
                    
                </DashboardContainer>
            </React.Fragment>
        );
    }
}

const MapStateToProps = state => ({
    invoice : state.invoiceReducer
})

export default connect(MapStateToProps)(Invoice);