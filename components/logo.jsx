import PropTypes from 'prop-types';
import styles from './logo.module.css';

const Logo = ({ variant = 'dark', size = 'big', className }) => (
  <div className={[styles.wrapper, styles[variant], styles[size], className].join(' ')}>
    Lions Club Weil am Rhein
  </div>
);

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['small', 'big']),
  className: PropTypes.string,
};

export default Logo;
