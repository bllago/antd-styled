import React from 'react'
import { Typography as AntTypography } from 'antd'
import styled from 'styled-components'

const StyledParagraph = styled(AntTypography.Paragraph)`
  margin-bottom: 0 !important;
`

const Paragraph = (props) => {
  return <StyledParagraph {...props} />
}

export default Paragraph
