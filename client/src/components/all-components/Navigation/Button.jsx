import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
const variants = {
  default: 'tw-bg-white',
  primary: 'tw-bg-primary-blue tw-text-white',
  secondary: 'tw-bg-primary-yellow',
};

/**
 * Button is a component that is responsible for being the universally styles ALL
 * navigation button. This component is to be used as a single source of truth for button
 * implementation.
 */
const Button = ({ className, children, variant = 'default', ...props }) => {
  return (
    <button
      className={twMerge(
        'tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-h-10 tw-px-4 tw-py-2 tw-rounded-md tw-shadow-lg tw-border-0 tw-font-bold tw-transition-colors tw-duration-300',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(variants)),
};

export default Button;
