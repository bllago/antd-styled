import React from 'react'
import { Layout, Header, Content, PageWrapper } from 'antd-plus'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout minHeight="auto">
        <Header px={theme.grid.paddings} color="#fff">Header</Header>
        <Content px={theme.grid.paddings}>
        <PageWrapper
          alignMiddle
          headingProps={{
            title: "Clinic members",
            subTitle: "Welcome your teammates! :)"
          }}
          graphicProps={{
            src: 'https://www.facebook.com/images/fb_icon_325x325.png',
            alt: 'FOI health'
          }}>
        </PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
