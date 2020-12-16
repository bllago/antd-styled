import React from 'react'
import Back from './Back'

export default {
  title: 'Components/Actions/back',
  component: Back
  //   argTypes: {
  //     status: { control: 'select' }
  //   }
}

const Template = (args) => <Back {...args} />

export const Default = Template.bind({})
Default.args = {
  //   status: 'default'
}
