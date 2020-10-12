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

const StyledTitle = styled(AntTypography.Title)(
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

const Title = (props) => {
  return <StyledTitle {...props} />
}

export default Title
