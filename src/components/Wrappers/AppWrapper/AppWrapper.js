import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'

/**
 * AppWrapper (25 Mar 2021)
 *
 * @since      0.0.1
 *
 * @param {node}         [children]                  Use to insert any node within component.
 *
 * @return {ReactComponent}
 */

const AppWrapper = (props) => {
  const { children } = props

  return (
    <Box display='flex' flex={1} {...props}>
      {children}
    </Box>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node
}

export default AppWrapper
