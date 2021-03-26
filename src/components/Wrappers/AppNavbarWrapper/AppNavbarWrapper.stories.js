import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppWrapper from '../AppWrapper'
import AppNavbarWrapper from './AppNavbarWrapper'

import theme from '../../../mockedTheme'

export default {
  title: 'Components/Wrappers/AppNavbarWrapper',
  component: AppNavbarWrapper,
  argTypes: {
    children: {
      description: 'Use to insert any node within component.',
      control: { disable: true }
    },
    width: {
      description: 'Use to specify component width.',
      defaultValue: 280
    }
  }
}

export const Template = (args) => (
  <ThemeProvider theme={theme}>
    <AppWrapper
      horizontal
      bg='#f2f2f2'
      width='90vw'
      height='90vh'
      appNavbar={<AppNavbarWrapper bg='#4c4c4c' {...args} />}
    />
  </ThemeProvider>
)
