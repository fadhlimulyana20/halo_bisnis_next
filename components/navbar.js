import {Navbar, Nav, Container} from 'react-bootstrap';
import React, { useState } from 'react';
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Link from 'next/link';

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
            <Navbar.Collapse>
              <Nav className="ml-auto">
                  <Link href="/">
                    <a className="nav-link">
                      Home
                    </a>
                  </Link>
                  <Link href="/product">
                    <a className="nav-link">
                      Produk
                    </a>
                  </Link>
                  <Nav.Link>Layanan</Nav.Link>
                  <Nav.Link>Tentang</Nav.Link>
                  <Nav.Link>Sampel</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
  )
}