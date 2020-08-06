import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

const StyledAntSider = styled(Layout.Sider)(compose(layout, space))

const Sider = (props) => <StyledAntSider {...props} />

export default Sider
