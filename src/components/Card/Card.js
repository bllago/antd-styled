import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Card as AntCard } from 'antd'
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

const StyledAntCard = styled(AntCard)(
  compose(
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
    system({ transform: true })
  )
)

const Card = (props) => {
  const { shadowless } = props
  const theme = useContext(ThemeContext)
  const boxShadowProps = shadowless ? 'unset' : theme.shadow.card

  return <StyledAntCard boxShadow={boxShadowProps} {...props} />
}

export default Card
