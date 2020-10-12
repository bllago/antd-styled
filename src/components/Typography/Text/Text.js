import React from 'react'
import { Typography as AntTypography } from 'antd'
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
  shadow
} from 'styled-system'

const StyledText = styled(AntTypography.Text)(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow
  )
)

const Text = (props) => {
  return <StyledText {...props} />
}

export default Text
