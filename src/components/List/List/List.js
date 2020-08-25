import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import { Typography } from 'antd'

import {
  HORIZONTAL_LAYOUT_PROPS,
  DEFAULT_LAYOUT_PROPS,
  GRID_ITEM_DEFAULT_PROPS,
  DEFAULT_VERTICAL_SCROLL_PROPS
} from './constants'

const List = (props) => {
  const {
    items,
    listItem,
    horizontal,
    grid,
    columns,
    scrollable,
    maxHeight,
    title,
    titleWidthProps,
    titleProps,
    action,
    headerActionWidthProps,
    footerActionWidthProps,
    isListHeader,
    headerPositioningProps,
    isListFooter,
    footerPositioningProps
  } = props

  const listLayoutProps =
    !grid && horizontal ? HORIZONTAL_LAYOUT_PROPS : DEFAULT_LAYOUT_PROPS

  const isColumnsNumber = columns && typeof columns === 'number'
  const isColumnsObject = columns && typeof columns === 'object'
  const colProps = isColumnsNumber
    ? { span: 24 / columns }
    : isColumnsObject
    ? columns
    : GRID_ITEM_DEFAULT_PROPS

  const scrollProps =
    !grid && !horizontal && scrollable && DEFAULT_VERTICAL_SCROLL_PROPS

  const list =
    items &&
    items.map((item) =>
      grid && !horizontal ? (
        <Col key={item.id} {...colProps} display='flex' flexDirection='column'>
          {React.cloneElement(listItem, { data: item })}
        </Col>
      ) : (
        React.cloneElement(listItem, { data: item })
      )
    )

  return (
    <React.Fragment>
      {isListHeader && (
        <Row mb={24} {...headerPositioningProps}>
          {title && (
            <Col {...titleWidthProps}>
              <Typography.Title {...titleProps}>{title}</Typography.Title>
            </Col>
          )}
          {action && <Col {...headerActionWidthProps}>{action}</Col>}
        </Row>
      )}
      <Row>
        {grid && list}
        {!grid && (
          <Col
            span={24}
            {...listLayoutProps}
            {...scrollProps}
            maxHeight={maxHeight}
          >
            {list}
          </Col>
        )}
      </Row>
      {isListFooter && (
        <Row mt={24} {...footerPositioningProps}>
          <Col {...footerActionWidthProps}>{action}</Col>
        </Row>
      )}
    </React.Fragment>
  )
}

List.propTypes = {
  title: PropTypes.string
}

export default List

// ——————————————————————————————————— Oleksiy version ——————————————————————————————————————————————————————————————

// import React from 'react'
// import PropTypes from 'prop-types'
// import Row from '../../LayoutSystem/Row'
// import Col from '../../LayoutSystem/Col'

// const List = (props) => {
//   const { items, listItem, columns } = props
//   const isColumnsNumber = columns && typeof columns === 'number'
//   const isColumnsObject = columns && typeof columns === 'object'
//   const isGridLayout = isColumnsNumber || isColumnsObject
//   const colProps = isColumnsNumber ? { span: 24 / columns } : columns
//   const list =
//     items &&
//     items.map((item) =>
//       isGridLayout ? (
//         <Col key={item.id} {...colProps}>
//           {React.cloneElement(listItem, { data: item })}
//         </Col>
//       ) : (
//         React.cloneElement(listItem, { data: item })
//       )
//     )
//   return (
//     <Row>
//       {isGridLayout && list}
//       {!isGridLayout && <Col span={24}>{list}</Col>}
//     </Row>
//   )
// }

// List.propTypes = {
//   title: PropTypes.string
// }

// export default List
