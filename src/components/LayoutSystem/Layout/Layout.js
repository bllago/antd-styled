import React from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'
import { compose, layout, background, color } from 'styled-system'

const StyledAntLayout = styled(AntLayout)(compose(layout, background, color))

const Layout = (props) => <StyledAntLayout {...props} />

export default Layout
