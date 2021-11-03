import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const base = 'font-bold rounded-md h-12 inline-flex items-center px-8';
const variants = {
  primary: 'bg-blue text-white',
  secondary: 'bg-yellow',
};

const Button = React.forwardRef(
  ({ onClick, href, variant, children, className, ...props }, ref) => {
    const Tag = ref ? 'a' : 'button';

    return (
      <Tag
        href={href}
        onClick={onClick}
        ref={ref}
        {...props}
        className={cx(base, variants[variant], className)}
      >
        {children}
      </Tag>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['secondary', 'primary']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
