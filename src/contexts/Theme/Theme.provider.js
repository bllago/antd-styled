import React from 'react'
import ThemeContext from './Theme.context'

const ThemeProvider = (props) => {
  const { theme, children } = props
  const Provider = ThemeContext.Provider
  return <Provider value={theme}>{children}</Provider>
}

export default ThemeProvider
