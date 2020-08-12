import React from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'
import { compose, layout, background } from 'styled-system'

const StyledAntLayout = styled(AntLayout)(compose(layout, background))

const Layout = (props) => <StyledAntLayout {...props} />

export default Layout
