import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import ListItem from '../../ListSystem/ListItem'

const SimpleList = (props) => {
  return (
    <Row>
      <Col span={24}>
        <ListItem />
        <ListItem />
      </Col>
    </Row>
  )
}

SimpleList.propTypes = {
  title: PropTypes.string
}

export default SimpleList
