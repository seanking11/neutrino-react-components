import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../SvgIcon'
import { Icon as StyledIcon } from './styled'

const Icon = ({ color, name, ...rest }) => (
  <StyledIcon color={color} {...rest}>
    <SvgIcon name={name} />
  </StyledIcon>
)

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Icon
