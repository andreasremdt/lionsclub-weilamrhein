import PropTypes from 'prop-types';
import styles from './container.module.css';

const Container = ({ children, className, ...props }) => (
  <div className={[styles.main, className].join(' ')} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
