import React from 'react'
import { Layout, Header, Content, PageWrapper, List, Card, ClinicRemove } from 'antd-plus'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const Item = (item) => {
  return <Card>{item.itemName}</Card>
}

const items = [
  {
    itemName: 'Trond Klæboe'
  },
  {
    itemName: 'Oleksiy Pastukhov'
  },
  {
    itemName: 'Ruslan Khorin'
  },
  {
    itemName: 'Evgeniy Bogdanov'
  }
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout minHeight='auto' style={{ backgroundColor: "#fff" }}>
        <Header px={theme.grid.paddings} color="#fff">Header</Header>
        <Content px={theme.grid.paddings}>
        <PageWrapper
          alignMiddle
          headingProps={{
            title: "Clinic members",
            subTitle: "Welcome your teammates! :)"
          }}>
            <List
              items={items}
              renderItem={Item}
              isListHeader
              headerPositioningProps={{ justifyContent: 'space-between' }}
              titleProps={{ level: 4 }}
              title="Title"
              action={<ClinicRemove label="Create" />}
            />
        </PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
