import React from 'react'
import { Divider as AntDivider } from 'antd'
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

const StyledAntDivider = styled(AntDivider)(
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

const Divider = (props) => <StyledAntDivider {...props} />

export default Divider
