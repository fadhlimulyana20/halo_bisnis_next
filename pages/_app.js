// import react module
import React, { Component } from 'react';
import { useEffect } from 'react';

// Import Next Module
import Head from 'next/head';
import App from 'next/app';

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
import { userLoad } from '../redux/actions/auth';

// import next redux wrapper
import withRedux from 'next-redux-wrapper';

import LoadingBar from 'react-top-loading-bar'

class myApp extends App {
  state = {  
    progress : 0
  }

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  
    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }

  async componentDidMount() {
    const {store} = this.props;

    store.dispatch(loadCart());
    store.dispatch(userLoad());
  }

  render() { 
    const { Component, pageProps, store } = this.props;
    const { progress } = this.state;

    console.log(store);

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
          
          <LoadingBar color='#f11946' progress={progress}
            onLoaderFinished={() => this.setState({progress : 0})} />
          <NavBar />
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

// function App({ Component, pageProps, store }) {
  // useEffect(() => {
  //   store.dispatch(loadCart());
  //   store.dispatch(userLoad());
  // });

//   return (
//       <>
//         <Provider store={store}>
//           <Head>
//               <title>HaloBisnis.id</title>
//               <link rel="icon" href="/android-icon-192x192.png" />
//               <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
//               <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

//               <script
//               src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
//               crossOrigin="true"></script>

//               <script
//               src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
//               crossOrigin="true"></script>
//           </Head>
//           <NavBar />
//           <Component {...pageProps} />
//         </Provider>
//       </>
//   )
// }

// export async function getInitialProps({Component, ctx}) {
//   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//   //Anything returned here can be accessed by the client
//   return {pageProps: pageProps};
// }

// //makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(myApp);
