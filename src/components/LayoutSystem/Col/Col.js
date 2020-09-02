import React from 'react'
import { Col as AntCol } from 'antd'
import styled from 'styled-components'
import { compose, layout, space, flexbox, system } from 'styled-system'

const StyledAntCol = styled(AntCol).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['maxHeight', 'flexDirection', 'flexWrap'].includes(prop)
})(compose(layout, space, flexbox, system({ whiteSpace: true })))

const Col = (props) => <StyledAntCol {...props} />

export default Col
