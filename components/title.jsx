import PropTypes from 'prop-types';
import styles from './title.module.css';

const Title = ({ Tag, children, className, underline, ...props }) => (
  <Tag
    className={[styles.base, styles[Tag], underline ? styles.underline : null, className].join(' ')}
    {...props}
  >
    {children}
  </Tag>
);

Title.propTypes = {
  Tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  underline: PropTypes.bool,
};

Title.defaultProps = {
  Tag: 'h1',
  underline: false,
};

export default Title;
