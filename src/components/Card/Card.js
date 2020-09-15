import React from 'react'
import { Card as AntCard } from 'antd'
import styled from 'styled-components'
import { compose, shadow, space } from 'styled-system'

const StyledAntCard = styled(AntCard)(compose(shadow, space))

const Card = (props) => <StyledAntCard {...props} />

export default Card
