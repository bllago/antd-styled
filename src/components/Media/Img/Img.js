import React from 'react'
import styled from 'styled-components'
import { compose, position, layout } from 'styled-system'
import PropTypes from 'prop-types'

const Image = styled('img')(compose(position, layout))

const Img = (props) => <Image {...props} />

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Img
