import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { compose, position, layout, space } from 'styled-system'

const StyledAntFooter = styled(Layout.Footer)(compose(position, layout, space))

const Footer = (props) => <StyledAntFooter {...props} />

export default Footer
