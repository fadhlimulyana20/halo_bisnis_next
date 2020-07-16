// import react module
import React, { Component } from 'react';

// Import next module
import Head from 'next/head';

import { FooterLg } from "../../components/footer";

// import Chef_rafiki from "../img/Chef_rafiki.png";
// import html from "../img/html.png";
// import mail_coding from "../img/mail-coding.png";

class ServicePage extends Component {
  render() { 
    return (  
      <React.Fragment>
        <div className="header-section" id="pricing-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="header-img mx-auto">
                            <img className="img-fluid" src="/Chef_rafiki.png" /> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-regular">Sekilas tentang</h4>
                        <h2 className="font-weight-bold">Layanan Kami</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-section" id="html-coding">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="mx-auto">
                    <img className="img-fluid" src="/html.png" /> 
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <h3 className="text-regular">FrontEnd <span className="font-weight-bold">Coding</span></h3>
                <div className="text-content mb-5">
                    <p>Pembuatan Kode Program html/css dari design web menjadi bentuk imlementasi halaman web.</p>
                </div>
                <span className="price-tag" id="html-price-tag">Mulai dari Rp. 100.000</span>
              </div>
            </div>
            <div className="row" >
              <div className="col-lg-6 mb-4">
                  <div className="card shadow">
                    <div className="card-header bg-crimson text-center">Satuan</div>
                    <div className="card-body text-center">
                        <h5 className="mb-3">Pembuatan dari 0</h5>
                        <h6 className="mb-3">1 Halaman <span className="tag tag-crimson rounded-pill">Rp. 100.000</span></h6>
                        <h6 className="mb-3">5 Halaman atau lebih <span className="tag tag-crimson rounded-pill"> n x Rp. 90.000</span></h6>
                        <h6 className="mb-3">10 Halaman atau lebih <span className="tag tag-crimson rounded-pill"> n x Rp. 75.000</span></h6>
                        <hr></hr>
                        <p className="small">n adalah jumlah halaman.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card shadow">
                    <div className="card-header bg-crimson text-center">Paket Hemat</div>
                      <div className="card-body text-center">
                        <h5>Paket Hemat Template</h5>
                        <h6 >Mulai Dari Rp. 120.000</h6>
                        <p>
                            Kami mempunyai berbagai template terbaik dengan harga terbaik sesuai dengan kebutuhan anda. Kami menyediakan template untuk keperluan admin, blog, portofolio, profile company, dll.
                        </p>
                        <button className="btn bg-crimson py-2 px-4 rounded-pill">Lihat Template Kami</button>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="content-section" id="mail-coding">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                  <div className="mx-auto">
                      <img className="img-fluid" src="/mail-coding.png" /> 
                  </div>
              </div>
              <div className="col-lg-6 text-center">
                  <h3 className="text-regular">Email Template <span className="font-weight-bold">Coding</span></h3>
                  <div className="text-content mb-5">
                      <p>Pembuatan Kode Program html/css dari design web menjadi bentuk imlementasi halaman web.</p>
                  </div>
                  <span className="price-tag" id="mail-price-tag">Mulai dari Rp. 75.000</span>
              </div>
            </div>
            <div className="row" >
              <div className="col-lg-6 mb-4">
                <div className="card shadow">
                  <div className="card-header bg-mediumspringgreen text-center">Satuan</div>
                  <div className="card-body text-center">
                    <h5 className="mb-3">Pembuatan dari 0</h5>
                    <h6 className="mb-3">1 Tempalate <span className="tag tag-mediumspringgreen rounded-pill">Rp. 75.000</span></h6>
                    <h6 className="mb-3">5 Template atau lebih <span className="tag tag-mediumspringgreen rounded-pill"> n x Rp. 60.000</span></h6>
                    <h6 className="mb-3">10 Template atau lebih <span className="tag tag-mediumspringgreen rounded-pill"> n x Rp. 50.000</span></h6>
                    <hr></hr>
                    <p className="small">n adalah jumlah halaman.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card shadow">
                  <div className="card-header bg-mediumspringgreen text-center">Paket Hemat</div>
                  <div className="card-body text-center">
                    <h5>Paket Hemat Template</h5>
                    <h6 >Mulai Dari Rp. 75.000</h6>
                    <p>
                        Kami mempunyai berbagai template email terbaik untuk berbagai keperluan seperti bisnis, blog, dll yang sudah siap digunakan. 
                    </p>
                    <button className="btn btn-green font-weight-bold py-2 px-4 rounded-pill">Lihat Template Kami</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLg />
      </React.Fragment>
    );
  }
}
 
export default ServicePage;