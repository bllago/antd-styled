import React from 'react'
import { Popover as AntPopover } from 'antd'
import styled from 'styled-components'
import { compose, space, layout, position } from 'styled-system'

const StyledAntPopover = styled(AntPopover)(compose(space, layout, position))

const StyledAntSkeletonOverrided = styled(StyledAntPopover)`
  .ant-popover-inner-content {
    padding: 24px;
  }
`

const Popover = (props) => <StyledAntSkeletonOverrided {...props} />

export default Popover
