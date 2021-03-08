import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = React.forwardRef(({ onClick, href, variant, children, ...props }, ref) => {
  const Tag = ref ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      ref={ref}
      {...props}
      className={[styles.base, styles[variant]].join(' ')}
    >
      {children}
    </Tag>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['secondary', 'primary']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
