import React from 'react'
import { Layout, Header, Content, PageWrapper, List, TextArea, Edit, Card, Popover, Box, Paragraph } from 'antd-plus'
import { Button } from 'antd'
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
          headingProps={{
            title: "Clinic members",
            titleLevel: 2,
            align: 'left'
            // subTitle: "Welcome your teammates! :)"
          }}
          isBack
          onBack
          backBtnProps={{
            shape: 'default'
          }}
          >
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
            <Popover trigger="click" content={<Box py={1}><TextArea size="large" /></Box>}>
              <Edit text='edit' />
            </Popover>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
