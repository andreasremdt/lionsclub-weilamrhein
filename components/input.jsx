import PropTypes from 'prop-types';
import styles from './input.module.css';

const Input = ({ Tag, type, label, id, error, ...props }) => (
  <div className={styles.group}>
    {label && (
      <label htmlFor={id} className={styles.label}>
        {label} {props.required && <span className={styles.asterisk}>*</span>}
      </label>
    )}
    <Tag
      id={id}
      name={id}
      type={Tag != 'textarea' ? type : null}
      className={styles.input}
      {...props}
    />
    {error && <p className={styles.error}>{error}</p>}
  </div>
);

Input.propTypes = {
  Tag: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  Tag: 'input',
  type: 'text',
};

export default Input;
