import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  placement: 'bottom'
}

const Edit = (props) => {
  const {
    text,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltip,
    tooltipPlacement
  } = props

  const iconNode = typeof icon === 'boolean' ? <EditOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <EditOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <EditOutlined /> : iconRight

  return (
    <Fragment>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={
            (tooltipPlacement && tooltipPlacement) || DEFAULT_PROPS.placement
          }
        >
          <Button
            {...props}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          icon={iconNode || iconNodeLeft}
          danger={false}
          onClick={onClick}
        >
          {text}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
}

Edit.propTypes = {
  label: PropTypes.string,
  // icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
}

export default Edit
