import React, { useState } from 'react'
import { Layout, Header, Content, PageWrapper, List, Card, ClinicCreate, MainSimpleView } from 'antd-plus'
import { Button, Input, Form } from 'antd'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

const Item = (item) => {
  return <Card mb={24}>{item.itemName}</Card>
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
  },
  {
    itemName: 'John Smith'
  },
  {
    itemName: 'Barbara Streizen'
  },
  {
    itemName: 'Dan Brown'
  },
  {
    itemName: 'John Moore'
  },
  {
    itemName: 'Brad Frost'
  },
  {
    itemName: 'Konstantin Konstantinovskyi'
  },
  {
    itemName: 'Igor Tarasov'
  },
  {
    itemName: 'Samanta Folder'
  }
]

const App = () => {
  const [state, setState] = useState({
    view: false
  })
  
  const toggleView = () => {
    setState({ view: !state.view })
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout minHeight="auto" style={{ backgroundColor: "#fff" }}>
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
              action={<ClinicCreate popover popoverContent={<Input autoFocus />} popoverTrigger="click" label="Create"icon />}
            />
            {/* <MainSimpleView form={state.view} /> */}
            {/* <Form>
              <Form.Item>
              <Input />
              </Form.Item>
            </Form>
            <Button >Toggle</Button> */}
        </PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
