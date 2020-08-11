import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Row as AntRow } from 'antd'

import {
  compose,
  layout,
  space,
  flexbox,
  background,
  color
} from 'styled-system'

const StyledAntRow = styled(AntRow)(
  compose(layout, flexbox, background, color, space)
)

const Row = (props) => {
  const theme = useContext(ThemeContext)
  return <StyledAntRow gutter={[theme.grid.gutters, 0]} {...props} />
}

export default Row
