import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({ children, className, ...props }) => (
  <div className={cx('container mx-auto', className)} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
