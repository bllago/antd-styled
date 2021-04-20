import React from 'react'
import './styles/index.css'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { PageWrapperTest, AppWrapper, AppNavbarWrapper, AppHeaderWrapper, Text, Button } from 'antd-plus'
import { Container, Row, Col } from '@qonsoll/react-design'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper
        // horizontal
        backgroundImage={theme.gradient.primary}
        contentProps={{
          py: 24
        }}
        appNavbar={<AppNavbarWrapper width={64} minWidth={64} bg="#4c4c4c" />}
        appHeader={<AppHeaderWrapper height={64} bg="#4c4c4c" />}
        bottomNavbar={<AppHeaderWrapper height={64} bg="#4c4c4c" />}
      >
        <PageWrapperTest
          alignMiddle
          headingProps={{
            title: "Clinic members",
            titleSize: 3,
            textAlign: 'left',
            marginBottom: 24
          }}
          action={<Button variant="white" size="large">Hello</Button>}
          contentWidth={['unset', 'unset', 400, 512]}
          onBack
        >
          <Container height="inherit" display="flex" flexDirection="column">
            <Row noGutters height="100%" style={{ flex: 1 }}>
              <Col cw={12} h="center"><Text textAlign="center">Here will be very long but smart and especialy usefull description...</Text></Col>
              <Col cw={12} mt="auto"><Button variant="white" block>Hello</Button></Col>
            </Row>
          </Container>
        </PageWrapperTest>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
