import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from '../../components/ErrorMessage'

const variants = { fill: { gray_100: 'bg-gray-100' } }
const shapes = { round: 'rounded-[10px]' }

const Input = React.forwardRef(
  (
    {
      wrapClassName = '',
      className = '',
      name = '',
      placeholder = '',
      type = 'text',
      children,
      errors = [],
      label = '',
      prefix,
      suffix,
      onChange,
      shape = 'round',
      size = '',
      variant = 'fill',
      color = 'gray_100',
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value)
    }

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ''} 
              ${variants[variant]?.[color] || ''} 
              `}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    )
  },
)

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(['round']),

  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['gray_100']),
}

export { Input }
