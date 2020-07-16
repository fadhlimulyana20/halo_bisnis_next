import React from 'react';

export function FooterLg() {
    return (
        <React.Fragment>
          <section className="footer" id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3 seperator-right">
                  <h5 className="h6 font-weight-bold">Tautan</h5>
                  <ul className="footer-link">
                      <li>
                          Home
                      </li>
                      <li>
                          Tentang Kami
                      </li>
                      <li>
                          Portofolio
                      </li>
                      <li>
                          Harga
                      </li>
                      <li>
                          Blog
                      </li>
                      <li>
                          Area Klien
                      </li>
                  </ul>
                </div>
                <div className="col-md-3 seperator-right">
                  <h5 className="h6 font-weight-bold">Layanan</h5>
                  <ul className="footer-link">
                      <li>FontEnd Coding</li>
                      <li>Mail Coding</li>
                      <li>React Coding</li>
                      <li>Website Company Profile</li>
                      <li>Website Blog</li>
                  </ul>
                </div>
                <div className="col-md-3 seperator-right">
                  <h5 className="h6 font-weight-bold">Hubungi Kami</h5>
                  <ul className="footer-link">
                      <li>Order Sekarang</li>
                      <li>Dapatkan Sampel</li>
                      <li>Kontak Kami</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="brand mx-auto">
                      <img src="/halobisnis.png" className="img-fluid" alt="logo-halo-bisnis"></img>
                  </div>
                  <ul className="footer-link mt-1 text-center">
                      <li className="brand-link">HaloBisnis.id</li>
                      <li>© Copyright 2020</li>
                  </ul>
                  <div className="d-flex justify-content-center social-link mt-2">
                      <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/HaloBisnisid-108897617551340" className="m-2" id="facebook"><i className="fab fa-facebook"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/halobisnis_id" className="m-2" id="twitter"><i className="fab fa-twitter"></i></a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/halobisniscompany/" className="m-2" id="instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    )
}