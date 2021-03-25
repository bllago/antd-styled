import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

/**
 * AppNavbar (25 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {node}         [children]                  Use to insert any node within component.
 * @param {number}       [width]                     Use to specify component width.
 *
 * @return {ReactComponent}
 */

const AppNavbar = (props) => {
  const { children, width } = props

  return (
    <Box width={width || 280} {...props}>
      {children}
    </Box>
  )
}

AppNavbar.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
}
AppNavbar.defaultProps = {
  width: '280px'
}

export default AppNavbar
