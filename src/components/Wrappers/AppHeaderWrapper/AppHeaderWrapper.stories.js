import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppWrapper from '../AppWrapper'
import AppHeaderWrapper from './AppHeaderWrapper'

import theme from '../../../mockedTheme'

export default {
  title: 'Components/Wrappers/AppHeaderWrapper',
  component: AppHeaderWrapper,
  argTypes: {
    children: {
      description: 'Use to insert any node within component.',
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
      appHeader={<AppHeaderWrapper bg='#4c4c4c' height={64} {...args} />}
    />
  </ThemeProvider>
)
