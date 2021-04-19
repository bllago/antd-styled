import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from '@qonsoll/react-design'
// import Row from '../../LayoutSystem/Row'
// import Col from '../../LayoutSystem/Col'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import Back from '../../Actions/Back'

const ContentWrapperTest = (props) => {
  const {
    firstLevelHidden,
    headingProps,
    alignMiddle,
    children,
    action,
    onBack,
    backBtnProps,
    divided
  } = props

  const DEFAULT_PROPS = {
    marginBottom: 48
  }

  return (
    <Container>
      <Row>
        {!firstLevelHidden && (
          <Col
            cw={12}
            mb={
              (headingProps && headingProps.marginBottom) ||
              DEFAULT_PROPS.marginBottom
            }
          >
            <Row
              alignItems={
                headingProps && !headingProps.subTitle ? 'center' : 'flex-start'
              }
            >
              <Col
                display='flex'
                flex='1 1 auto'
                alignItems={
                  headingProps && !headingProps.subTitle
                    ? 'center'
                    : 'flex-start'
                }
                justifyContent={
                  onBack || action || !alignMiddle ? 'flex-start' : 'center'
                }
              >
                {onBack && (
                  <Back
                    onClick={onBack}
                    {...backBtnProps}
                    divided={divided !== undefined ? divided : true}
                  />
                )}
                <HeadingPrimary {...headingProps} />
              </Col>
              {action && <Col>{action}</Col>}
            </Row>
          </Col>
        )}
        <Col cw={12} display='flex' flexDirection='column' flex='1'>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

ContentWrapperTest.propTypes = {
  children: PropTypes.node,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object.isRequired,
  action: PropTypes.node,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool,
  alignMiddle: PropTypes.bool
}

export default ContentWrapperTest
