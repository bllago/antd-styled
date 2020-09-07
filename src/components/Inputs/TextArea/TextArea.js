import React, { Fragment } from 'react'
import { Input as AntInput } from 'antd'
import styled from 'styled-components'
import { compose, typography } from 'styled-system'

const StyledTextArea = styled(AntInput.TextArea)(compose(typography))

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
