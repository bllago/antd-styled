import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppWrapper from '../AppWrapper'
import AppNavbarWrapper from '../AppNavbarWrapper'
import PageWrapper from './PageWrapper'

import theme from '../../../mockedTheme'

export default {
  title: 'Components/Wrappers/PageWrapper',
  component: PageWrapper,
  argTypes: {
    children: {
      description: 'Use to place smth. under the title (second level).',
      control: { disable: true }
    },
    height: {
      description: 'Use to specify first level height.'
      // control: { disable: true }
    },
    alignMiddle: {
      description: 'Use to make everything centered.'
    },
    contentWidth: {
      description:
        'Use to specify content width. Example: xs={24} sm={20} md={16} lg={12} xl={10}',
      control: { disable: true }
    },
    onBack: {
      description: 'Back event.',
      control: { disable: true }
    },
    backBtnProps: {
      description: 'Properties for back button. Read documentation above.',
      control: { disable: true }
    },
    divided: {
      description: 'Use to place divider between back button and title.'
    },
    graphicProps: {
      description:
        'Properties for graphic component. Read documentation above.',
      control: { disable: true }
    },
    firstLevelHidden: {
      description: 'Use to hide first level (back button, heading and actions).'
    },
    headingProps: {
      description: 'Properties for heading.',
      control: { disable: true }
    },
    action: {
      description: 'Use to add actions.',
      control: { disable: true }
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
      appNavbar={<AppNavbarWrapper width={200} bg='#4c4c4c' />}
    >
      <PageWrapper
        headingProps={{
          title: 'Title',
          titleSize: 3,
          textAlign: 'left',
          subTitle: 'Here will be subtitle...'
        }}
        {...args}
      >
        Here will be content very soon! :)
      </PageWrapper>
    </AppWrapper>
  </ThemeProvider>
)
