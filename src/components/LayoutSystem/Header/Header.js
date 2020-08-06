import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { compose, layout, space, color } from 'styled-system'

const StyledAntHeader = styled(Layout.Header)(compose(layout, space, color))

const Header = (props) => <StyledAntHeader {...props} />

export default Header
