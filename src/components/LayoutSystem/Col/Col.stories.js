import React from 'react'
import Col from './Col'

export default {
  title: 'Components/Layout system/Col',
  component: Col,
  argTypes: {
    'Default AntD props': {
      description:
        'Component absolutely maintain default AntD col properties (check Ant documentation: https://ant.design/components/grid/#Col).',
      control: { disable: true }
    },
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
  <Col {...args} width='92vw' height={64} bg='#e9e9e9' borderRadius={6} />
)
