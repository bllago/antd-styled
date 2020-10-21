import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Row as AntRow } from 'antd'

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

const StyledAntRow = styled(AntRow).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['alignItems', 'justifyContent'].includes(prop)
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

const Row = (props) => {
  const theme = useContext(ThemeContext)
  return <StyledAntRow gutter={[theme.grid.gutters, 0]} {...props} />
}

export default Row
