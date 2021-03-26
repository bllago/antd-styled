import React from 'react'
import Div from './Div'

export default {
  title: 'Components/Div',
  component: Div,
  argTypes: {
    Packages: {
      table: {
        category: 'Extentions'
      },
      description:
        'Applyed styled-system packages (check styled-system API documentation: https://styled-system.com/api).',
      control: { disable: true }
    },
    'Extra CSS props': {
      table: {
        category: 'Extentions'
      },
      description: 'Additional CSS properties which could be applyed.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => (
  <Div {...args} width={200} height={200} bg='#e9e9e9' borderRadius={12} />
)
