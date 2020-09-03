import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItem = (props) => {
  const StyledDiv = styled.div({
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      backgroundColor: '#f5f5f5'
    },
    '&:not(:last-child)': {
      marginBottom: props.itemSpacing
    }
  })

  return <StyledDiv>List item</StyledDiv>
}

ListItem.propTypes = {
  title: PropTypes.string
}

export default ListItem
