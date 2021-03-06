import PropTypes from 'prop-types';
import styles from './card.module.css';

const Card = ({ Tag, children }) => <Tag className={styles.card}>{children}</Tag>;

Card.propTypes = {
  Tag: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  Tag: 'section',
};

export default Card;
