import PropTypes from 'prop-types';

const Title = ({ Tag, children, underline, inverted, ...props }) => (
  <Tag {...props}>{children}</Tag>
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
