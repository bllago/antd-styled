import React from 'react'
import PropTypes from 'prop-types'
import PositioningWrapper from '../PositioningWrapper'
import ContentWrapper from '../ContentWrapper'
import Graphic from '../../Media/Graphic'

const PageWrapper = (props) => {
  const {
    children,
    contentWidth,
    graphicProps,
    firstLevelHidden,
    headingProps,
    alignMiddle,
    height,
    action,
    onBack,
    backBtnProps,
    backBtnPositionProps,
    divided
  } = props

  return (
    <PositioningWrapper
      height={height}
      alignMiddle={alignMiddle}
      contentWidth={contentWidth}
    >
      <Graphic {...graphicProps} />
      <ContentWrapper
        firstLevelHidden={firstLevelHidden}
        headingProps={headingProps}
        action={action}
        onBack={onBack}
        backBtnProps={backBtnProps}
        backBtnPositionProps={backBtnPositionProps}
        divided={divided}
      >
        {children}
      </ContentWrapper>
    </PositioningWrapper>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  graphicProps: PropTypes.object,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object,
  action: PropTypes.node,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  backBtnPositionProps: PropTypes.object,
  divided: PropTypes.bool
}

export default PageWrapper
