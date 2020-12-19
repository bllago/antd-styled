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
 * @param {oneOfType}    [height]                    Use to specify first level height.
 * @param {boolean}      [alignMiddle]               Use to make everything centered.
 * @param {object}       [contentWidth]              Use to specify content width.
 * @param {object}       [graphicProps]              Properties for graphic component.
 * @param {boolean}      [firstLevelHidden]          Use to hide first level (back button, heading and actions).
 * @param {object}       [headingProps]              Properties for heading.
 * @param {node}         [action]                    Use to add actions.
 * @param {func}         [onBack]                    Back event.
 * @param {object}       [backBtnProps]              Properties for back button.
 * @param {boolean}      [divided]                   Use to place divider between back button and title.
 *
 * @return {ReactComponent}
 */

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
    divided
  } = props

  return (
    <PositioningWrapper
      height={height}
      alignMiddle={alignMiddle}
      contentWidth={contentWidth}
      onBack={alignMiddle && onBack}
      backBtnProps={backBtnProps}
      divided={divided !== undefined ? divided : true}
    >
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
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.object,
  graphicProps: PropTypes.object,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object,
  action: PropTypes.node,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool
}

export default PageWrapper
