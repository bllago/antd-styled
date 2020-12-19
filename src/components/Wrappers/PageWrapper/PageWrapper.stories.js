import React from 'react'
import PageWrapper from './PageWrapper'

export default {
  title: 'Components/Wrappers/PageWrapper',
  component: PageWrapper,
  argTypes: {
    children: {
      description: 'Use to place smth. under the title (second level).',
      control: { disable: true }
    },
    height: {
      description: 'Use to specify first level height.',
      control: { disable: true }
    },
    alignMiddle: {
      description: 'Use to make everything centered.',
      control: { disable: true }
    },
    contentWidth: {
      description: 'Use to specify content width.',
      control: { disable: true }
    },
    graphicProps: {
      description: 'Properties for graphic component.',
      control: { disable: true }
    },
    firstLevelHidden: {
      description:
        'Use to hide first level (back button, heading and actions).',
      control: { disable: true }
    },
    headingProps: {
      description: 'Properties for heading.',
      control: { disable: true }
    },
    action: {
      description: 'Use to add actions.',
      control: { disable: true }
    },
    onBack: {
      description: 'Back event.',
      control: { disable: true }
    },
    backBtnProps: {
      description: 'Properties for back button.',
      control: { disable: true }
    },
    divided: {
      description: 'Use to place divider between back button and title.',
      control: { disable: true }
    }
  }
}

export const Template = (args) => <PageWrapper {...args} />
