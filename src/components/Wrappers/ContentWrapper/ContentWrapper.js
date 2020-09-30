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
    isBack,
    onBack,
    backBtnProps
  } = props

  return (
    <Row>
      {!firstLevelHidden && (
        <Col xs={24} mb={24}>
          <Row alignItems='center'>
            <Col display='flex' flex='auto' alignItems='center'>
              {isBack && (
                <Back
                  {...backBtnProps}
                  type='text'
                  icon={<ArrowLeftOutlined />}
                  onClick={onBack}
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
  isBack: PropTypes.bool,
  onBack: PropTypes.func
}

export default ContentWrapper
