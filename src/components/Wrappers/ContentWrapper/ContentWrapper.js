import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import HeadingPrimary from '../../Heading/HeadingPrimary'

const ContentWrapper = (props) => {
  const { firstLevelHidden, headingProps, children, action } = props

  return (
    <Row>
      {!firstLevelHidden && (
        <Col xs={24} mb={24}>
          <Row alignItems='center'>
            <Col flex='auto'>
              <HeadingPrimary {...headingProps} />
            </Col>
            <Col>{action}</Col>
          </Row>
        </Col>
      )}
      <Col xs={24}>{children}</Col>
    </Row>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object.isRequired,
  action: PropTypes.node
}

export default ContentWrapper
