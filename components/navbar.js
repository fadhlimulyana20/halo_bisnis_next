import {Navbar, Nav, Container} from 'react-bootstrap';

import React, { useState } from 'react';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

// next js module
import Link from 'next/link';

// project module
import ActiveLink from './common/activeLink';

// import fontawesome module
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(){
  // state
  const [change, setChange] = useState(false);
  const changePosition = 10;

  // Window position management
  let position = typeof window !== 'undefined' ? useWindowScrollPosition() : { x: 0, y: 0 };

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
      setChange(false);
  }

  // navbar variant management
  const navbar_variant = change ? `light` : "";
  const scrolled = change ? ` scrolled shadow` : '';

  return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="md" className={'py-2 mx-auto'+scrolled} fixed="top" id="mainNav" bg={navbar_variant} variant={navbar_variant} >
          <Container fluid>

            <Link href="/" >
              <a>
                <Navbar.Brand>
                  <img
                      alt=""
                      src="/halobisnis.png"
                      width="45"
                      height="45"
                      className="d-inline-block align-middle"    
                  />{' '}
                  Halo<span className="font-weight-bold">Bisnis</span>
                </Navbar.Brand>
              </a>
            </Link>
            <Navbar.Toggle aria-controls="main-menu" />
            <Navbar.Collapse id="main-menu">
              <Nav className="ml-auto">
                  <ActiveLink href="/" className="nav-link">
                    Home
                  </ActiveLink>
                  <ActiveLink href="/product" className="nav-link">
                    Produk
                  </ActiveLink>
                  <ActiveLink href="/service" className="nav-link">
                    Layanan
                  </ActiveLink>
                  <ActiveLink href="/about-us" className="nav-link">
                    Tentang
                  </ActiveLink>
                  <ActiveLink href="/sample" className="nav-link">
                    Sampel
                  </ActiveLink>
                  <ActiveLink href="/cart" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </ActiveLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
  )
}