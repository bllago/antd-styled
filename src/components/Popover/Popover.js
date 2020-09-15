import React from 'react'
import { Popover as AntPopover } from 'antd'
import styled from 'styled-components'
import { compose, layout } from 'styled-system'

const StyledAntPopover = styled(AntPopover)(compose(layout))

const Popover = (props) => <StyledAntPopover {...props} />

export default Popover
