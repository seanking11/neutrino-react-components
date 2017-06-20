import React from 'react'
import PropTypes from 'prop-types'
import { Message as Wrapper, Title, Subtitle } from './styled'

const Message = ({ title, children, ...rest }) => (
  <Wrapper {...rest}>
    <Title><strong>{title}</strong></Title>
    <Subtitle>{children}</Subtitle>
  </Wrapper>
)

Message.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Message
