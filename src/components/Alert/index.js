import React from 'react'
import PropTypes from 'prop-types'
import { BaseWrapper, Header, LargeWrapper } from './styled'
import Message from './Message'
import Icon from './Icon'

const Alert = ({ show, title, type, children, onClose, className, selfDestruct, largeAlert, styles }) => {
  if (!show) return null
  const Comp = largeAlert ? LargeWrapper : BaseWrapper

  if (selfDestruct) {
    setTimeout(onClose, Alert.timeout)
  }

  return (
    <Comp className={className} style={styles}>
      <Header>
        <button type='button' className='close' onClick={() => onClose()}>
          <span>&times;</span>
        </button>
      </Header>
      <Icon name={Alert.typeConfigs[type].name} color={Alert.typeConfigs[type].color} />
      <Message title={title}>{children}</Message>
    </Comp>
  )
}

Alert.types = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger'
}

Alert.typeConfigs = {
  success: {
    color: 'green',
    name: 'checkmark-2'
  },
  warning: {
    color: 'orange',
    name: 'exclamation-point-2'
  },
  danger: {
    color: 'red',
    name: 'x-2'
  },
  info: {
    color: 'blue',
    name: 'info-2'
  }
}

Alert.timeout = 5000

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  selfDestruct: PropTypes.bool,
  largeAlert: PropTypes.bool,
  styles: PropTypes.object
}

export default Alert
