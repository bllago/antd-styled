import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import Back from '../../Actions/Back'
// import { Button, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const ContentWrapper = (props) => {
  const {
    firstLevelHidden,
    headingProps,
    children,
    action,
    onBack,
    backBtnProps,
    backBtnPositionProps,
    divided
  } = props

  return (
    <Row>
      {!firstLevelHidden && (
        <Col xs={24} mb={24}>
          <Row alignItems='center'>
            <Col
              {...backBtnPositionProps}
              display='flex'
              flex='auto'
              alignItems='center'
            >
              {onBack && (
                <Back
                  {...backBtnProps}
                  type='text'
                  icon={<ArrowLeftOutlined />}
                  onClick={onBack}
                  divided={divided !== undefined ? divided : true}
                />
              )}
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
  action: PropTypes.node,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  backBtnPositionProps: PropTypes.object,
  divided: PropTypes.bool
}

export default ContentWrapper
