import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import NavBar from '../components/navbar';
import { Navbar } from 'react-bootstrap';
import ModalEx from "../components/modal";
import '../css/project.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


export default function App({ Component, pageProps }) {
    return (
        <>
          <Head>
              <title>HaloBisnis.id</title>
              <link rel="icon" href="/android-icon-192x192.png" />
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
              <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

              <script
              src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
              crossOrigin="true"></script>

              <script
              src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
              crossOrigin="true"></script>
          </Head>
          <NavBar />
          <Component {...pageProps} />
        </>
    )
}