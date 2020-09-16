import React from 'react'
import { Popover as AntPopover } from 'antd'
import styled from 'styled-components'
import { compose, space, layout, position } from 'styled-system'

const StyledAntPopover = styled(AntPopover)(compose(space, layout, position))

const Popover = (props) => <StyledAntPopover {...props} />

export default Popover
