import React from 'react'
import { Col as AntCol } from 'antd'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

const StyledAntCol = styled(AntCol)(compose(layout, space))

const Col = (props) => <StyledAntCol {...props} />

export default Col
