import React from 'react'
import { Welcome as StyledWelcome } from './styled'

const Welcome = props => (
  <StyledWelcome>Hello, {props.name}!</StyledWelcome>
)

export default Welcome
