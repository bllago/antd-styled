import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  placement: 'bottom'
}

const Save = (props) => {
  const {
    text,
    type,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltip,
    tooltipPlacement
  } = props

  const iconNode = typeof icon === 'boolean' ? <SaveOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <SaveOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <SaveOutlined /> : iconRight

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
            type={type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type}
          icon={iconNode || iconNodeLeft}
          danger={false}
          onClick={onClick}
        >
          {text || 'Save'}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
}

Save.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  // icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
}

export default Save
