import React from 'react'
import AppWrapper from './AppWrapper'

export default {
  title: 'Components/Wrappers/AppWrapper',
  component: AppWrapper,
  argTypes: {
    children: {
      description: 'Use to insert any node within component.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <AppWrapper
    bg='#f2f2f2'
    width='90vw'
    height='90vh'
    borderRadius={6}
    {...args}
  />
)
