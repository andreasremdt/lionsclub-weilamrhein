import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = ({ Tag, children, className, ...props }) => (
  <Tag className={cx('bg-white px-28 py-16', className)} {...props}>
    {children}
  </Tag>
);

Card.propTypes = {
  Tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  Tag: 'section',
};

export default Card;
