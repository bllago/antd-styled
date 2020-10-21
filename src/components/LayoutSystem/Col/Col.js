import React from 'react'
import { Col as AntCol } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system
} from 'styled-system'

const StyledAntCol = styled(AntCol).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['maxHeight', 'flexDirection', 'flexWrap'].includes(prop)
})(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({
      whiteSpace: true,
      cursor: true,
      wordBreak: true,
      zoom: true,
      transform: true
    })
  )
)

const Col = (props) => <StyledAntCol {...props} />

export default Col
