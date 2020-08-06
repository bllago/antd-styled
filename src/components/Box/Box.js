import React from 'react'
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

const StyledDiv = styled('div')(
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

const Box = (props) => <StyledDiv {...props} />

export default Box
