import React from 'react'
import { Typography as AntTypography } from 'antd'
import styled from 'styled-components'
import {
  // compose,
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

const StyledParagraph = styled(AntTypography.Paragraph)`
  margin-bottom: 0 !important;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${system({
    whiteSpace: true,
    cursor: true,
    wordBreak: true,
    zoom: true,
    transform: true
  })}
`

const Paragraph = (props) => {
  return <StyledParagraph {...props} />
}

export default Paragraph
