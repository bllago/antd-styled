import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { EditFilled } from '@ant-design/icons'

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
    tooltipProps
  } = props

  const iconNode = typeof icon === 'boolean' ? <EditFilled /> : icon
  const iconNodeLeft = typeof iconLeft === 'boolean' ? <EditFilled /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <EditFilled /> : iconRight

  return (
    <Fragment>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          {...tooltipProps}
          placement={
            (tooltipProps && tooltipProps.placement) || DEFAULT_PROPS.placement
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
