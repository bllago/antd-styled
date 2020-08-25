import React from 'react'
import PropTypes from 'prop-types'

import SimpleForm from '../SimpleForm'
import SimpleView from '../SimpleView'

const MainSimpleView = (props) => {
  const { form } = props

  return (
    <React.Fragment>{form ? <SimpleForm /> : <SimpleView />}</React.Fragment>
  )
}

MainSimpleView.propTypes = {
  formSize: PropTypes.bool
}

export default MainSimpleView
