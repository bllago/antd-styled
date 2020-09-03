import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'

const ListHeader = (props) => {
  return (
    <Row>
      <Col span={24}>Advanced list</Col>
    </Row>
  )
}

ListHeader.propTypes = {
  title: PropTypes.string
}

export default ListHeader
