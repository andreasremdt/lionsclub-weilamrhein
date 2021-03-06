import PropTypes from 'prop-types';
import styles from './card.module.css';

const Card = ({ Tag, children, className, ...props }) => (
  <Tag className={[styles.card, className].join(' ')} {...props}>
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
