/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import svgs from './svgs'

const SvgIcon = ({ name, className, ...rest }) => (
  <div
    className={`SvgIcon ${className}`}
    dangerouslySetInnerHTML={{ __html: svgs[name] }}
    {...rest}
  />
)

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

SvgIcon.defaultProps = {
  className: ''
}

export default SvgIcon
