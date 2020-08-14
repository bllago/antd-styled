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
      <ContentWrapper headingProps={headingProps}>{children}</ContentWrapper>
    </PositioningWrapper>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  graphicProps: PropTypes.object,
  headingProps: PropTypes.object
}

export default PageWrapper
