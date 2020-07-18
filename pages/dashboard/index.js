import React, { Component } from 'react';

import Router from 'next/router';

import Sidebar from '../../components/dashSidebar';

class Dashboard extends Component {
  // componentDidMount(){
  //   Router.push('/signin');
  // }

  render() {
    return (
      <React.Fragment>
        <Sidebar/>
      </React.Fragment>
    );
  }
}

export default Dashboard;