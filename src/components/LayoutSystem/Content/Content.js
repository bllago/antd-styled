import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { compose, position, layout, space } from 'styled-system'

const StyledAntContent = styled(Layout.Content)(
  compose(position, layout, space)
)

const Content = (props) => <StyledAntContent {...props} />

export default Content
