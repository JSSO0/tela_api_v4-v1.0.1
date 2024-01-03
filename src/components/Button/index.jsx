import React from 'react'
import PropTypes from 'prop-types'

const shapes = { round: 'rounded-[20px]' }
const variants = { fill: { gray_100: 'bg-gray-100 text-black-900' } }
const sizes = { xs: 'p-[18px]' }

const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = 'round',
  size = 'xs',
  variant = 'fill',
  color = 'gray_100',
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ''} ${
        (size && sizes[size]) || ''
      } ${(variant && variants[variant]?.[color]) || ''}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['xs']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['gray_100']),
}

export { Button }
