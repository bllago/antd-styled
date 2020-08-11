import React from 'react'
import { Layout, Header, Content, Row, Col } from 'antd-plus'
import { ThemeProvider } from 'styled-components'
import { Typography } from 'antd'

// import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout minHeight="100%">
        <Header px={theme.grid.paddings} color="#fff">Header</Header>
        <Content px={theme.grid.paddings}>
          <Row mb={16}>
            <Col flex="1">
              <Typography.Title>Page title</Typography.Title>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
