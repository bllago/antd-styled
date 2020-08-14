import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import HeadingPrimary from '../../Heading/HeadingPrimary'

const ContentWrapper = (props) => {
  const { headingHidden, headingProps, children } = props
  return (
    <Row>
      {!headingHidden && (
        <Col xs={24}>
          <HeadingPrimary {...headingProps} />
        </Col>
      )}
      <Col xs={24}>{children}</Col>
    </Row>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  headingHidden: PropTypes.bool,
  headingProps: PropTypes.object.isRequired
}

export default ContentWrapper
