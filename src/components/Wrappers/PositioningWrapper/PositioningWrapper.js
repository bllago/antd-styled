import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import {
  CENTERED_CONTENT_DEFAULT_WIDTH,
  CONTENT_DEFAULT_WIDTH,
  ALIGN_MIDDLE_PROPS
} from './constants'

const PositioningWrapper = (props) => {
  const { children, height, alignMiddle, contentWidth } = props
  const positioningProps = alignMiddle && ALIGN_MIDDLE_PROPS
  const columnProps = alignMiddle
    ? contentWidth && Object.keys(contentWidth).length
      ? contentWidth
      : CENTERED_CONTENT_DEFAULT_WIDTH
    : CONTENT_DEFAULT_WIDTH

  return (
    <Row height={height} {...positioningProps}>
      <Col {...columnProps}>{children}</Col>
    </Row>
  )
}

PositioningWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object
}

export default PositioningWrapper
