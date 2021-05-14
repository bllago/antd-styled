import React from 'react'
import "antd/dist/antd.css";
import {ThemeProvider} from 'styled-components'
import theme from './theme'

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
}

export const decorators = [
 (Story) => (
	 <ThemeProvider theme = {theme}>
		 <Story/>
	 </ThemeProvider>
 )
]
