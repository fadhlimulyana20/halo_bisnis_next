import React, {Component} from 'react';

import SidebarLink from '../common/sidebarLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileInvoice, faBrush, faLaptopCode, faUser, faMoneyBill, faPowerOff} from '@fortawesome/free-solid-svg-icons';


import { userLogout } from '../../redux/actions/auth';
import store from '../../redux/store';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      display : false,
    };
  }

  handleLogOut = event => {
    event.preventDefault();
    store.dispatch(userLogout());
  }

  render() {
    // className for sidebar display
    let className = "sidebar";
    if (this.state.display){
        className += " show";
    }

    return (
      <React.Fragment>
        <div className={className}>
          <div className="sidebar-content">
            <div className="d-flex justify-content-end">
              <a className="closebtn" onClick={this.handleClick}>&times;</a>
            </div>
            <div className="contianer-fluid">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <SidebarLink href="/dashboard">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span>Beranda</span>
                  </SidebarLink>
                  <SidebarLink href="/dashboard/invoice">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faFileInvoice} />
                    </div>
                    <span>Tagihan</span>
                  </SidebarLink>
                  <SidebarLink href="/dashboard/theme">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faBrush} />
                    </div>
                    <span>Tema</span>
                  </SidebarLink>
                  <SidebarLink href="/dashboard/project">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <span>Project</span>
                  </SidebarLink>
                  <hr/>
                  <SidebarLink href="/dashboard/account">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>Akun</span>
                  </SidebarLink>
                  <SidebarLink href="/dashboard/payment">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faMoneyBill} />
                    </div>
                    <span>Pembayaran</span>
                  </SidebarLink>
                  <a href="" className="nav-link d-flex justify-content-start rounded-pill" onClick={this.handleLogOut}>
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faPowerOff} />
                    </div>
                    <span>Keluar</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
