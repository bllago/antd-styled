import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import Divider from '../../Divider'
import { ArrowLeftOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  placement: 'topLeft'
}

const Back = (props) => {
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

  const iconNode = typeof icon === 'boolean' ? <ArrowLeftOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <ArrowLeftOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <ArrowLeftOutlined /> : iconRight

  return (
    <Fragment>
      {!text && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Fragment>
          <Tooltip
            title={tooltip}
            placement={
              (tooltipPlacement && tooltipPlacement) || DEFAULT_PROPS.placement
            }
          >
            <Button
              {...props}
              type='text'
              icon={iconNode || iconNodeLeft || iconNodeRight}
              danger={false}
              onClick={onClick}
            />
          </Tooltip>
          <Divider type='vertical' mr={3} />
        </Fragment>
      ) : (
        <Fragment>
          <Button
            {...props}
            type='text'
            icon={iconNode || iconNodeLeft}
            danger={false}
            onClick={onClick}
          >
            {text}
            {iconNodeRight}
          </Button>
          <Divider type='vertical' mr={3} />
        </Fragment>
      )}
    </Fragment>
  )
}

Back.propTypes = {
  label: PropTypes.string,
  // icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
}

export default Back
