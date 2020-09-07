import React from 'react'
import { Layout, Header, Content, PageWrapper, List, TextArea } from 'antd-plus'
import { Button, Card } from 'antd'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const items = [
  {
    itemName: 'Trond Klæboe',
    id: '1'
  },
  {
    itemName: 'Oleksiy Pastukhov',
    id: '2'
  },
  {
    itemName: 'Ruslan Khorin',
    id: '3'
  },
  {
    itemName: 'Evgeniy Bogdanov',
    id: '4'
  }
]
const Item = (props) => {
  const { item } = props
  return (<Card mb={24}>{item.itemName}</Card>)
}

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
              isLoaded
              isEmpty={false}
              items={items}
              renderItem={(item) => <Item key={item.id} item={item} />}
              isListFooter
              action={
                <Button key='button' type="primary" size="large" block>Next step</Button>
              }
              footerActionWidthProps={{ xs: 12 }}
              footerPositioningProps={{ justifyContent: 'center' }}
            />
            <TextArea size="large" />
        </PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
