import React from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'
import { compose, layout, background, color, position } from 'styled-system'

const StyledAntLayout = styled(AntLayout).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['minHeight', 'backgroundImage'].includes(prop)
})(compose(layout, background, color, position))

const Layout = (props) => <StyledAntLayout {...props} />

export default Layout
