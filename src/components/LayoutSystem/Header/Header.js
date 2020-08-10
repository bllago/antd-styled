import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { compose, layout, space, color, shadow } from 'styled-system'

const StyledAntHeader = styled(Layout.Header)(
  compose(layout, space, color, shadow)
)

const Header = (props) => <StyledAntHeader {...props} />

export default Header
