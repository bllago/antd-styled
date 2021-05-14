import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd'
import styled, { ThemeContext } from 'styled-components'
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
 * Divider (14 Apr 2021)
 *
 * @since      0.0.2
 *
 * @param {object}      [Default AntD props]      Component absolutely maintain default AntD button properties (check Ant documentation: https://ant.design/components/button/#API).
 * @param {oneOf}       [Packages]                Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).
 * @param {oneOf}       [Extra CSS props]         Additional CSS properties which could be applyed.
 * @param {oneOf}       [variant]                 Use to change button type.
 *
 * @return {ReactComponent}
 */

const StyledAntButton = styled(AntButton)(({ theme }) =>
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
      transition: true
    }),
    variant({
      variants: {
        white: {
          color: theme.color.text.dark.secondary,
          bg: theme.color.white.default,
          borderColor: theme.color.white.default,
          '&:hover': {
            color: theme.color.text.dark.primary,
            bg: theme.color.white.default,
            borderColor: theme.color.white.default
          }
        }
      }
    })
  )
)

const Button = (props) => <StyledAntButton {...props} />

Button.propTypes = {
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
    'transition'
  ]),
  variant: PropTypes.oneOf(['white'])
}

export default Button
