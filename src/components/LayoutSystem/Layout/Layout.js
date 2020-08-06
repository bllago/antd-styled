import React from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'
import { compose, layout } from 'styled-system'

const StyledAntLayout = styled(AntLayout)(compose(layout))

const Layout = (props) => <StyledAntLayout {...props} />

export default Layout
