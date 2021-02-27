import PropTypes from 'prop-types';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object,
};

export default App;