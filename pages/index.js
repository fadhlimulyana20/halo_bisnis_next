// import next module
import Head from 'next/head'
import Link from 'next/link';

// import react module
import React from 'react'

// import FontAwesome module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faBootstrap, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faMedal, faHeadset, faPiggyBank, faFileAlt, faBuilding, faBlog } from '@fortawesome/free-solid-svg-icons'

// import Project Module
import { FooterLg } from '../components/footer';

// import react-scroll module
import { Link as ScrollLink } from 'react-scroll';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | HaloBisnis.id</title>
      </Head>
      <header className="masthead" id="master">
        <div className="container-fluid h-100">
            <div className="row h-100 align-items-center">
                <div className="col-md-6 text-center">
                    <div className="mx-auto brand">
                        <img src="/halobisnis.png" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <h4 className="mb-4">Selamat Datang di HaloBisnis.id</h4>
                    <h1 className="font-weight-bold">Kembangkan </h1>
                    <h1 className="font-weight-bold">Bisnis Digital Anda</h1>
                    <div className="row mt-4">
                        <div className="col-md-8">
                            <p>
                                Kami mengubah desain menjadi kode HTML/CSS untuk web perusahaan, blog, email, dan lain-lain.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-left mt-4">
                        <ScrollLink 
                            to="services" 
                            duration={500}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            className="btn btn-salmon text-uppercase font-weight-bold py-3 px-5 rounded-pill shadow">
                                Layanan Kami
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
      </header>
      {/* Section Service */}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center section-title">
              <h1 className="h2">Layanan <span className="font-weight-bold">Kami</span></h1> 
          </div>
          <div className="content mt-4">
              <div className="row justify-content-center text-center">
                <div className="col-md-4 container-fluid">
                    <div className="service-box shadow">
                      <h1>
                        <FontAwesomeIcon icon={faFileAlt} style={{color:"#DB3021"}} />
                      </h1>
                      <h2 className="h5">Web <span className="font-weight-bold">Portofolio</span></h2>
                      <p>
                          Kami mengubah desain/rancangan anda menjadi web portofolio untuk diri anda atau bisnis anda. Kami juga menyediakan template yang siap digunakan untuk memulai portofolio anda. 
                      </p>
                      <Link href="service/web-portofolio">
                        <a className="btn btn-red-outline py-2 font-weight-bold mt-5 rounded-pill">Lihat</a>
                      </Link>
                    </div>
                </div>
                <div className="col-md-4 container-fluid">
                    <div className="service-box shadow">
                      <h1>
                        <FontAwesomeIcon icon={faBuilding} style={{color:"#00FFC2"}} />
                      </h1>
                      <h2 className="h5">Web <span className="font-weight-bold">Company Profile</span></h2>
                      <p>
                          Kami mengubah desain/rancangan anda menjadi web profil perusahaan yang siap digunakan untuk menjadi landing page pagi konsumen di perusahaan anda. Kami juga menyediakan template yang siap digunakan.
                      </p>
                      <Link href="/service/company-profile">
                        <a className="btn btn-green-outline py-2 font-weight-bold mt-5 rounded-pill" >
                          Lihat
                        </a>
                      </Link>
                    </div>
                </div>
                <div className="col-md-4 container-fluid">
                    <div className="service-box shadow">
                      <h1>
                        <FontAwesomeIcon icon={faBlog} style={{color:"#00D8FF"}} />
                      </h1>
                      <h2 className="h5">Web <span className="font-weight-bold">Blog</span></h2>
                      <p>
                          Kami menyediakan berbagai template untuk memulai blog anda. Kami juga bisa mengubah desain/rancangan anda menjadi web blog yang siap digunakan untuk blogging.
                      </p>
                      <Link href="/service/blog">
                        <a className="btn btn-sky-outline py-2 font-weight-bold mt-5 rounded-pill">
                          Lihat
                        </a>
                      </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Model */}
      <section className="page-section" id="model">
          <div className="container">
          <h1 className="h2 font-weight-normal mt-0 text-center mb-4">Teknologi yang <span className="font-weight-bold">Kami Gunakan</span></h1>
            <div className="row align-items-center mt-4">
              <div className="col-md-6">
              <div className="d-flex align-content-around flex-wrap justify-content-center">
                  <div className="tech" style={{color:"#DB3021"}}>
                      <h1 className="mb-0">
                        <FontAwesomeIcon icon={faHtml5} className="mx-auto" />
                      </h1>
                      <h6>HTML5</h6>
                  </div>
                  <div className="tech shadow" style={{color:"#28a4d9"}}>
                      <h1 className="mb-0">
                        <FontAwesomeIcon icon={faCss3} className="mx-auto" />
                      </h1>
                      <h6>CSS3</h6>
                  </div>
                  <div className="tech shadow" style={{color:"#00D8FF"}}>
                      <h1 className="mb-0">
                        <FontAwesomeIcon icon={faReact} className="mx-auto" />
                      </h1>
                      <h6>React JS</h6>
                  </div>
                  <div className="tech shadow" style={{color:"#7952b3"}}>
                      <h1 className="mb-0">
                        <FontAwesomeIcon icon={faBootstrap} className="mx-auto" />
                      </h1>
                      <h6>Bootstrap</h6>
                  </div>
                  <div className="tech shadow" style={{color:"#0073aa"}}>
                      <h1 className="mb-0">
                        <FontAwesomeIcon icon={faWordpress} className="mx-auto" />
                      </h1>
                      <h6>Wordpress</h6>
                  </div>  
                  <div className="tech shadow">
                      <img style={{width : "5.5em"}} src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" />
                      <h6 className="mt-2">Django</h6>
                  </div>
              </div>
              </div>
              <div className="col-md-6 my-auto">
                  <div className="text mt-4">
                      <p>                                    
                          Kami menggunakan berbagai <span className="font-weight-bold">teknologi web terkini  </span> untuk memastikan website anda terancang dengan baik dan sesuai dengan perembangan zaman.
                      </p>
                      <p>
                          Anda bisa melihat <span className="font-weight-bold">beberapa sampel</span> yang telah kami buat menggunakan beberapa teknologi tersebut.
                      </p>
                  </div>
                  <Link href="/sample">
                    <a className="btn btn-mediumaquamarine py-2 font-weight-bold rounded-pill shadow mt-4">
                      Lihat Sampel
                    </a>
                  </Link>
              </div>
            </div>
          </div>
      </section>
      
      {/* Section Promises */}
      <section className="page-section" id="promises">
        <div className="container">
          <div className="text-center mb-4">
              <h2>Komitmen <span className="font-weight-bold">Kami</span></h2>
          </div>
          <div className="row">
            <div className="col-md-4">
                <h4 className="h5 font-weight-bold">
                    <FontAwesomeIcon icon={faMedal} className="mr-2" />
                    Kualitas Produk Baik
                </h4>
                <div className="text">
                    <p>
                        Kami berkomitmen penuh untuk menghasilkan produk-produk terbaik untuk memenuhi kebutuhan website bisnis anda.
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <h4 className="h5 font-weight-bold">
                  <FontAwesomeIcon icon={faHeadset} className="mr-2" />
                    Customer Support
                </h4>
                <div className="text">
                    <p>
                        Kami senantiasa akan membantu customer jika ditemukan kendala pada produk yang kami kerjakan.
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <h4 className="h5 font-weight-bold">
                  <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
                    Harga Bersahabat
                </h4>
                <div className="text">
                    <p>
                        Kami berkomitmen untuk merancang produk terbaik dengan pengeluaran yang efektif agar biaya produksi dapat ditekan.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Section Portofolio */}
      <section className="page-section" id="portofolio">
          <div className="container h-100">
              <div className="row align-items-center h-100">
                  <div className="col-md-7">
                      <div id="portofolio-sample" className="mx-auto my-auto">
                          <img className="img-fluid shadow" src="/sampel_web.jpg"/>
                      </div>
                  </div>
                  <div className="col-md-5 mt-4">
                      <h2>Butuh</h2>
                      <h2 className="mt-0 font-weight-bold">Produk Jadi?</h2>  
                      <p className="mb-4">
                          Kami menyediakan produk-produk seperti tema dan template yang siap digunakan untuk website anda sesuai dengan keperluan anda.
                      </p>
                      <Link href="/product">
                        <a className="btn btn-sky py-2 font-weight-bold rounded-pill shadow mt-4">
                          Lihat Produk Kami
                        </a>
                      </Link>
                  </div>
              </div>
          </div>
      </section>
      {/* Section  */}
      <section className="page-section" id="emphasis">
        <div className="container">
          <div className="text-center">
            <h2>Atau mulai <span className="font-weight-bold">Project Anda</span></h2>
            <h2>dengan Kami</h2>
            <div>
                <img src="/Programming-amico.png" style={{width : "15em"}} />
            </div>
            <Link href="/signin?next=user-area/project">
              <a className="btn btn-khaki font-weight-bold py-2 shadow rounded-pill" >
                Mulai Project Anda  
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* footer-section */}
      <FooterLg />
    </React.Fragment>
  )
}
export async function getInitialProps({Component, ctx}) {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be access by the client
  return {pageProps: pageProps};
}