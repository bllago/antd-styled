import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppWrapper from './AppWrapper'
import AppNavbarWrapper from '../AppNavbarWrapper'
import AppHeaderWrapper from '../AppHeaderWrapper'
import Box from '../../Box'

import theme from '../../../mockedTheme'

export default {
  title: 'Components/Wrappers/AppWrapper',
  component: AppWrapper,
  argTypes: {
    horizontal: {
      description: 'Use to specify horizontal layout direction for component.'
    },
    children: {
      description: 'Use to insert any node within component.',
      control: { disable: true }
    },
    appNavbar: {
      description: 'Use to insert App navigation within component.',
      control: { disable: true }
    },
    bottomNavbar: {
      description: 'Use to insert App bottom navigation within component.',
      control: { disable: true }
    },
    appHeader: {
      description: 'Use to insert App header within component.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <ThemeProvider theme={theme}>
    <AppWrapper
      bg='#f2f2f2'
      width='90vw'
      height='90vh'
      appNavbar={<AppNavbarWrapper bg='#e5e5e5' />}
      appHeader={<AppHeaderWrapper height={64} bg='#e5e5e5' />}
      bottomNavbar={<Box bg='#c1c1c1' height={64} />}
      {...args}
    />
  </ThemeProvider>
)