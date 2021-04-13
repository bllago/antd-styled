import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'
import Layout from '../../LayoutSystem/Layout'
import Content from '../../LayoutSystem/Content'

/**
 * AppWrapper (12 Apr 2021)
 *
 * @since      0.0.2
 *
 * @param {boolean}      [horizontal]                Use to specify horizontal layout direction for component.
 * @param {node}         [children]                  Use to insert any node within component.
 * @param {node}         [appNavbar]                 Use to insert App navigation within component.
 * @param {node}         [bottomNavbar]              Use to insert App bottom navigation within component.
 * @param {node}         [appHeader]                 Use to insert App header within component.
 *
 * @return {ReactComponent}
 */

const AppWrapper = (props) => {
  const {
    horizontal,
    children,
    appNavbar,
    bottomNavbar,
    appHeader,
    contentProps
  } = props

  const theme = useContext(ThemeContext)

  return (
    <Layout flexDirection={horizontal && 'row'} {...props}>
      {horizontal && appNavbar}
      {!horizontal && appHeader}
      <Content px={theme.grid.paddings} {...contentProps} overflow='auto'>
        {children}
      </Content>
      {!horizontal && bottomNavbar}
    </Layout>
  )
}

AppWrapper.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  appNavbar: PropTypes.node,
  bottomNavbar: PropTypes.node,
  appHeader: PropTypes.node
}
AppWrapper.defaultProps = {
  horizontal: false
}

export default AppWrapper