// import react module
import { useEffect } from 'react';

// Import Next Module
import Head from 'next/head';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Import project module
import NavBar from '../components/navbar';

// Import Project CSS
import '../css/project.css';

// FontAwesome Config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// react redux module
import { Provider } from 'react-redux';

// redux configuration module
import store from '../redux/store';
import { loadCart } from '../redux/actions/cart';

// import next redux wrapper
import withRedux from 'next-redux-wrapper';


function App({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(loadCart())
  });

  return (
      <>
        <Provider store={store}>
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
        </Provider>
      </>
  )
}

export async function getInitialProps({Component, ctx}) {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return {pageProps: pageProps};
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(App);
