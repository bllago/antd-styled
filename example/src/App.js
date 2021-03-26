import React from 'react'
import { PageWrapper, AppWrapper, AppNavbarWrapper, AppHeaderWrapper } from 'antd-plus'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper
        horizontal
        appNavbar={<AppNavbarWrapper bg="#4c4c4c" />}
        appHeader={<AppHeaderWrapper height={64} bg="#4c4c4c" />}
      >
        <PageWrapper
          alignMiddle
          headingProps={{
            title: "Clinic members",
            titleSize: 1,
            textAlign: 'left',
            // subTitle: "Welcome your teammates! :)"
          }}
          // onBack
        >
          Content
        </PageWrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
