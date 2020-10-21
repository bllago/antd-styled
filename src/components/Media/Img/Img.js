import React from 'react'
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
import PropTypes from 'prop-types'

const Image = styled('img')(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({ whiteSpace: true, cursor: true, wordBreak: true, zoom: true })
  )
)

const Img = (props) => <Image {...props} />

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Img
