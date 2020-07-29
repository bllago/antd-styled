import React from 'react'
import styled, { withTheme } from 'styled-components'
import { compose, position, layout } from 'styled-system'
import PropTypes from 'prop-types'

const Image = styled('img')(compose(position, layout))

const Img = (props) => <Image {...props} />

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string
}

export default withTheme(Img)
