import PropTypes from 'prop-types';
import Head from 'next/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../styles/globals.css';
import '../styles/styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
        />
      </Head>

      <Navigation />

      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
