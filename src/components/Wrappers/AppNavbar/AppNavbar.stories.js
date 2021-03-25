import React from 'react'
import AppWrapper from '../AppWrapper'
import AppNavbar from './AppNavbar'

export default {
  title: 'Components/Wrappers/AppNavbar',
  component: AppNavbar,
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
  <AppWrapper height='90vh'>
    <AppNavbar bg='#f2f2f2' borderRadius={6} {...args} />
  </AppWrapper>
)
