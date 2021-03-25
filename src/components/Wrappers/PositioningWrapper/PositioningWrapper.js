import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import Box from '../../Box'
import Back from '../../Actions/Back'
import {
  CENTERED_CONTENT_DEFAULT_WIDTH,
  CONTENT_DEFAULT_WIDTH
} from './constants'

const PositioningWrapper = (props) => {
  const {
    children,
    height,
    alignMiddle,
    contentWidth,
    onBack,
    backBtnProps,
    divided
  } = props

  const ALIGN_MIDDLE_PROPS = {
    alignItems: onBack ? 'flex-start' : 'center',
    justifyContent: 'center'
  }

  const positioningProps = alignMiddle && ALIGN_MIDDLE_PROPS
  const columnProps = alignMiddle
    ? contentWidth && Object.keys(contentWidth).length
      ? contentWidth
      : CENTERED_CONTENT_DEFAULT_WIDTH
    : CONTENT_DEFAULT_WIDTH

  return (
    <Box height={height} flexGrow={1} {...positioningProps}>
      <Row>
        {onBack && (
          <Col xs={24} mb={[2, 2, 2, 0, 0, 0]}>
            <Back onClick={onBack} {...backBtnProps} divided={divided} />
          </Col>
        )}
        <Col {...columnProps}>{children}</Col>
      </Row>
    </Box>
  )
}

PositioningWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool
}

export default PositioningWrapper
