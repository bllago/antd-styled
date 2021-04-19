import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '@qonsoll/react-design'
// import Row from '../../LayoutSystem/Row'
// import Col from '../../LayoutSystem/Col'
import Back from '../../Actions/Back'
// import {
//   CENTERED_CONTENT_DEFAULT_WIDTH,
//   CONTENT_DEFAULT_WIDTH
// } from './constants'

const PositioningWrapperTest = (props) => {
  const {
    children,
    height,
    minHeight,
    alignMiddle,
    // contentWidth,
    onBack,
    backBtnProps,
    divided
  } = props

  const ALIGN_MIDDLE_PROPS = {
    height: '100%',
    v: onBack ? 'flex-start' : 'center',
    h: 'center'
  }

  const positioningProps = alignMiddle && ALIGN_MIDDLE_PROPS
  // const columnProps = alignMiddle
  //   ? contentWidth && Object.keys(contentWidth).length
  //     ? contentWidth
  //     : CENTERED_CONTENT_DEFAULT_WIDTH
  //   : CONTENT_DEFAULT_WIDTH

  return (
    <Container height={height} minHeight={minHeight} {...positioningProps}>
      <Row>
        {onBack && (
          <Col cw={12} mb={[2, 2, 2, 0, 0, 0]}>
            <Back onClick={onBack} {...backBtnProps} divided={divided} />
          </Col>
        )}
        <Col
          cw={12}
          // {...columnProps}
        >
          {children}
        </Col>
      </Row>
    </Container>
  )
}

PositioningWrapperTest.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool
}

export default PositioningWrapperTest
