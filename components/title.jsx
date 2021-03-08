import PropTypes from 'prop-types';
import styles from './title.module.css';

const Title = ({ Tag, children, className, underline, inverted, ...props }) => (
  <Tag
    className={[
      styles.base,
      styles[Tag],
      underline ? styles.underline : null,
      inverted ? styles.inverted : null,
      className,
    ].join(' ')}
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
  inverted: PropTypes.bool,
};

Title.defaultProps = {
  Tag: 'h1',
  underline: false,
  inverted: false,
};

export default Title;
