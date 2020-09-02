import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import Img from '../Img'
import { DEFAULT_PROPS } from './constants'

const Graphic = (props) => {
  const {
    src,
    alt,
    hidden,
    animation,
    width,
    height,
    position,
    top,
    bottom,
    left,
    right
  } = props

  return (
    <Box display={hidden || DEFAULT_PROPS.hidden}>
      <Img
        src={src}
        alt={alt}
        className={animation || DEFAULT_PROPS.animation}
        width={width}
        height={height || DEFAULT_PROPS.height}
        position={position || DEFAULT_PROPS.position}
        top={top}
        bottom={bottom || DEFAULT_PROPS.bottom}
        left={left}
        right={right || DEFAULT_PROPS.right}
      />
    </Box>
  )
}

Graphic.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  hidden: PropTypes.string,
  animation: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string
}

export default Graphic
