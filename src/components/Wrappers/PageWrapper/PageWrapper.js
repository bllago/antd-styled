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
    headingHidden,
    headingProps,
    alignMiddle,
    height
  } = props

  return (
    <PositioningWrapper
      height={height}
      alignMiddle={alignMiddle}
      contentWidth={contentWidth}
    >
      <Graphic {...graphicProps} />
      <ContentWrapper headingHidden={headingHidden} headingProps={headingProps}>
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
  headingHidden: PropTypes.bool,
  headingProps: PropTypes.object
}

export default PageWrapper
