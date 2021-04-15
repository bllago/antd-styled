import React from 'react'
import PropTypes from 'prop-types'
import PositioningWrapper from '../PositioningWrapper'
import ContentWrapper from '../ContentWrapper'
import Graphic from '../../Media/Graphic'

/**
 * PageWrapper (19 Dec 2020)
 *
 * @since      0.0.1
 *
 * @param {node}         [children]                  Use to place smth. under the title (second level).
 * @param {oneOfType}    [height]                    Use to specify content height.
 * @param {oneOfType}    [minHeight]                 Use to specify content min-height.
 * @param {boolean}      [alignMiddle]               Use to make everything centered.
 * @param {object}       [contentWidth]              Use to specify content width. Example: xs={24} sm={20} md={16} lg={12} xl={10}
 * @param {func}         [onBack]                    Back event.
 * @param {object}       [backBtnProps]              Properties for back button. Read documentation above.
 * @param {boolean}      [divided]                   Use to place divider between back button and title.
 * @param {object}       [graphicProps]              Properties for graphic component. Read documentation above.
 * @param {boolean}      [firstLevelHidden]          Use to hide first level (back button, heading and actions).
 * @param {object}       [headingProps]              Properties for heading.
 * @param {node}         [action]                    Use to add actions.
 *
 * @return {ReactComponent}
 */

const PageWrapper = (props) => {
  const {
    children,
    height,
    minHeight,
    alignMiddle,
    contentWidth,
    onBack,
    backBtnProps,
    divided,
    graphicProps,
    firstLevelHidden,
    headingProps,
    action
  } = props

  return (
    <PositioningWrapper
      height={height}
      minHeight={minHeight}
      alignMiddle={alignMiddle}
      contentWidth={contentWidth}
      onBack={alignMiddle && onBack}
      backBtnProps={backBtnProps}
      divided={divided !== undefined ? divided : true}
    >
      {/* {graphicProps.src && graphicProps.alt && <Graphic {...graphicProps} />} */}
      <Graphic {...graphicProps} />
      <ContentWrapper
        firstLevelHidden={firstLevelHidden}
        headingProps={headingProps}
        alignMiddle={alignMiddle}
        action={action}
        onBack={!alignMiddle && onBack}
        backBtnProps={backBtnProps}
        divided={divided !== undefined ? divided : true}
      >
        {children}
      </ContentWrapper>
    </PositioningWrapper>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool,
  graphicProps: PropTypes.object,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object,
  action: PropTypes.node
}
PageWrapper.defaultProps = {
  alignMiddle: false,
  firstLevelHidden: false,
  divided: true
}

export default PageWrapper
