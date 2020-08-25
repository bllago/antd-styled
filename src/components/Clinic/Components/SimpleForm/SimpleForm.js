import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

const MainSimpleView = (props) => {
  const { formSize, submitComponent } = props

  return (
    <Form size={formSize}>
      <Form.Item>
        <Input />
      </Form.Item>
      {submitComponent}
    </Form>
  )
}

MainSimpleView.propTypes = {
  formSize: PropTypes.string,
  submitComponent: PropTypes.node
}

export default MainSimpleView
