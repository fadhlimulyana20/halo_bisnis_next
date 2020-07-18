import React from 'react';

// import next module 
import Head from 'next/head';

// import project module
import { FooterLg } from '../components/footer';

export default function About(){
  return(
    <React.Fragment>
        <Head>
          <title>Tentang HaloBisnis.id</title>
        </Head>
        <section className="header-section bg-khaki" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mx-auto p-5">
                  <img src="/Programming-amico.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 header-text">
                <h2>HaloBisnis.id</h2>
                <p className="text-regular">merancang, membuat, dan membantu anda dalam mengembangkan aplikasi bisnis anda. Kami adalah software house yang membantu anda dalam menyelesaikan masalah digitalisasi bisnis anda.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="header-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mx-auto p-5">
                  <img src="/Online Groceries-pana.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 header-text text-sienna">
                <h2>Digitalisasi Bisnis Anda</h2>
                <p className="text-regular">
                    Kami membuat berbagai template, website, dan juga aplikasi untuk mengembangkan bisnis anda dan juga mengatarkan bisnis anda ke era digital.
                </p>
              </div>
            </div>
          </div>
        </section>  
        <section className="header-section bg-mediumspringgreen">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mx-auto p-5">
                    <img src="/Blog-post-bro.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 header-text">
                <h2>Sobat Para Kreatif</h2>
                <p className="text-regular">
                    Kami membatu para konten kreator untuk merancang blog, portofolio, atau website pribadi mereka.
                </p>
              </div>
            </div>
          </div>
        </section>  
        <section className="header-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mx-auto p-5">
                  <img src="/halobisnis.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 header-text text-sienna">
                <h2 className="mb-0">Mulai Project Anda</h2>
                <h2 className="mt-0">Bersama Kami</h2>
                <p className="text-regular">
                  Mulai project anda dengan kami atau dapatkan produk-produk terbaik kami.
                </p>
                <div>
                  <button className="btn btn-green py-2 px-4 rounded-pill font-weight-bold mr-3 shadow">Hubungi Kami</button>
                  <button className="btn btn-red-outline py-2 px-4 rounded-pill font-weight-bold shadow">Rencanakan</button>
                </div>
              </div>
            </div>
          </div>
        </section>  
        <FooterLg />
    </React.Fragment>
  )
}