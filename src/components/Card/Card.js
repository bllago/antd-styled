import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Card as AntCard } from 'antd'
import { compose, shadow, space } from 'styled-system'

const StyledAntCard = styled(AntCard)(compose(shadow, space))

const Card = (props) => {
  const { shadowless } = props
  const theme = useContext(ThemeContext)
  const boxShadowProps = shadowless ? 'unset' : theme.shadow.card

  return <StyledAntCard boxShadow={boxShadowProps} {...props} />
}

export default Card
