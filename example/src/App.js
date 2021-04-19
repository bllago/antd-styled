import React from 'react'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { PageWrapperTest, AppWrapper, AppNavbarWrapper, AppHeaderWrapper, Text, Button } from 'antd-plus'
import { Container, Row, Col, Box } from '@qonsoll/react-design'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper
        // horizontal
        appNavbar={<AppNavbarWrapper bg="#4c4c4c" />}
        appHeader={<AppHeaderWrapper height={64} bg="#4c4c4c" />}
        bottomNavbar={<AppHeaderWrapper height={64} bg="#4c4c4c" />}
      >
        <PageWrapperTest
          headingProps={{
            title: "Clinic members",
            titleSize: 3,
            textAlign: 'left',
            marginBottom: 24
          }}
        >
          <Container>
            <Row>
              <Col cw={12}><Text>Here will be very long but smart and especialy usefull description...</Text></Col>
              <Col cw={12} mt="auto"><Button variant="white">Hello</Button></Col>
            </Row>
          </Container>
        </PageWrapperTest>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
