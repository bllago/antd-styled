import React, { Fragment } from 'react'
import { Input as AntInput } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system
} from 'styled-system'

const StyledTextArea = styled(AntInput.TextArea)(
  compose(
    typography,
    space,
    color,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({ transform: true })
  )
)

const TextArea = (props) => {
  return (
    <Fragment>
      {props.size === 'large' ? (
        <StyledTextArea {...props} fontSize={20} />
      ) : (
        <StyledTextArea {...props} />
      )}
    </Fragment>
  )
}

export default TextArea
