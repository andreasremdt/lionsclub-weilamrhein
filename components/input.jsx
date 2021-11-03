import PropTypes from 'prop-types';

const Input = ({ Tag, type, label, id, error, ...props }) => (
  <div className="relative">
    {label && (
      <label htmlFor={id} className="block mb-2">
        {label} {props.required && <span className="text-gray-600">*</span>}
      </label>
    )}
    <Tag
      id={id}
      name={id}
      type={Tag != 'textarea' ? type : null}
      className="min-h-12 border border-gray-300 rounded-md w-full resize-y px-4 py-2 font-light"
      {...props}
    />
    {error && (
      <p className="text-red-500 text-xs bg-white px-1 absolute -bottom-2 left-4">{error}</p>
    )}
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
