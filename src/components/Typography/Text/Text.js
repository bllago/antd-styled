import React from 'react'
import PropTypes from 'prop-types'
import { Typography as AntTypography } from 'antd'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  system,
  variant
} from 'styled-system'

/**
 * Text (15 Apr 2021)
 *
 * @since      0.0.3
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD text properties (check Ant documentation: https://ant.design/components/typography/#Typography.Text).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 * @param {oneOf}       [variant]                 Use to change text type.
 * @param {oneOf}       [isEllipsis]              Use to truncate text.
 *
 * @return {ReactComponent}
 */

const StyledText = styled(AntTypography.Text).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})(({ theme }) =>
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    system({
      whiteSpace: true,
      cursor: true,
      wordBreak: true,
      zoom: true,
      transform: true,
      textTransform: true,
      textOverflow: true,
      webkitLineClamp: {
        property: '-webkit-line-clamp'
      },
      webkitBoxOrient: {
        property: '-webkit-box-orient'
      }
    }),
    variant({
      variants: {
        h1: {
          fontSize: theme.typography.fontSize.h1,
          lineHeight: theme.typography.lineHeight.h1,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        h2: {
          fontSize: theme.typography.fontSize.h2,
          lineHeight: theme.typography.lineHeight.h2,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        h3: {
          fontSize: theme.typography.fontSize.h3,
          lineHeight: theme.typography.lineHeight.h3,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        h4: {
          fontSize: theme.typography.fontSize.h4,
          lineHeight: theme.typography.lineHeight.h4,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        h5: {
          fontSize: theme.typography.fontSize.h5,
          lineHeight: theme.typography.lineHeight.h5,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        h6: {
          fontSize: theme.typography.fontSize.h6,
          lineHeight: theme.typography.lineHeight.h6,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.none
        },
        overline: {
          fontSize: theme.typography.fontSize.overline,
          lineHeight: theme.typography.lineHeight.overline,
          fontWeight: theme.typography.fontWeight.medium,
          letterSpacing: theme.typography.letterSpacing.default
        },
        body1: {
          fontSize: theme.typography.fontSize.body1,
          lineHeight: theme.typography.lineHeight.body1,
          fontWeight: theme.typography.fontWeight.regular,
          letterSpacing: theme.typography.letterSpacing.none
        },
        body2: {
          fontSize: theme.typography.fontSize.body2,
          lineHeight: theme.typography.lineHeight.body2,
          fontWeight: theme.typography.fontWeight.regular,
          letterSpacing: theme.typography.letterSpacing.none
        },
        caption1: {
          fontSize: theme.typography.fontSize.caption1,
          lineHeight: theme.typography.lineHeight.caption1,
          fontWeight: theme.typography.fontWeight.regular,
          letterSpacing: theme.typography.letterSpacing.none
        },
        caption2: {
          fontSize: theme.typography.fontSize.caption2,
          lineHeight: theme.typography.lineHeight.caption2,
          fontWeight: theme.typography.fontWeight.regular,
          letterSpacing: theme.typography.letterSpacing.none
        }
      }
    })
  )
)
const Text = (props) => {
  const { isEllipsis } = props

  return (
    <StyledText
      textOverflow={isEllipsis && 'ellipsis'}
      whiteSpace={isEllipsis && 'nowrap'}
      overflow={isEllipsis && 'hidden'}
      {...props}
    />
  )
}

Text.propTypes = {
  'Default AntD props': PropTypes.object,
  Packages: PropTypes.oneOf([
    'space',
    'color',
    'typography',
    'layout',
    'flexbox',
    'background',
    'border',
    'position',
    'shadow'
  ]),
  'Extra CSS props': PropTypes.oneOf([
    'whiteSpace',
    'cursor',
    'wordBreak',
    'zoom',
    'transform',
    'textTransform',
    'textOverflow',
    'webkitLineClamp',
    'webkitBoxOrient'
  ]),
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'overline',
    'body1',
    'body2',
    'caption1',
    'caption2'
  ]),
  isEllipsis: PropTypes.bool
}

export default Text
