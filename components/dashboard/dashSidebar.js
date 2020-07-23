import React, {Component} from 'react';

import SidebarLink from '../common/sidebarLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileInvoice, faBrush, faLaptopCode, faUser, faMoneyBill, faPowerOff} from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      display : false,
    };
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
                  <SidebarLink href="/dashboard/tema">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faMoneyBill} />
                    </div>
                    <span>Pembayaran</span>
                  </SidebarLink>
                  <SidebarLink href="/dashboard/">
                    <div className="nav-icon">
                      <FontAwesomeIcon icon={faPowerOff} />
                    </div>
                    <span>Keluar</span>
                  </SidebarLink>
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
