import styled from 'styled-components'

export const BaseWrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 2000;
  width: 400px;
  padding: 1em 1.5em;
  background: white;
  box-shadow: 3px 3px 9px 1px rgba(50, 50, 50, 0.15);
`

export const LargeWrapper = BaseWrapper.extend`
  top: 50%;
  right: auto;
  left: 50%;
  width: 600px;
  padding: 27px 36px;
  font-size: 21px;
  transform: translate(-50%, -50%);
`

export const Header = styled.header`
  position: absolute;
  top: 5px;
  right: 12px;
`

export const Message = styled.div`
  overflow: hidden;
`

export const Title = styled.p`
  margin: 0 0 6px;
`

export const Subtitle = Title.extend`
  font-weight: 400;
  color: #444;
`

export const Icon = styled.div`
  float: left;
  margin-right: ${p => (p.largeAlert ? '2.25em' : '1.5em')};

  svg {
    width: ${p => (p.largeAlert ? '4em' : '3.25em')};
    height: ${p => (p.largeAlert ? '4em' : '3.25em')};
  }

  path {
    fill: ${p => p.color}
  }
`
