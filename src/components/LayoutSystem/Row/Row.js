import React from 'react'
import { Row as AntRow } from 'antd'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import { useTheme } from '../../../hooks'

const StyledAntRow = styled(AntRow)(compose(layout, space))

const Row = (props) => {
  const theme = useTheme()
  return <StyledAntRow gutter={[theme.grid.gutters, 0]} {...props} />
}

export default Row
