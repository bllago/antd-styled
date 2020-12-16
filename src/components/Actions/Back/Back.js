import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import Divider from '../../Divider'
import Box from '../../Box'
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
    tooltip,
    tooltipPlacement,
    divided
  } = props

  const iconNode =
    typeof icon === 'boolean' || typeof icon === 'undefined' ? (
      <ArrowLeftOutlined />
    ) : (
      icon
    )
  const iconNodeLeft =
    typeof iconLeft === 'boolean' || typeof icon === 'undefined' ? (
      <ArrowLeftOutlined />
    ) : (
      iconLeft
    )
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <ArrowLeftOutlined /> : iconRight

  return (
    <Fragment>
      {!text ? (
        <Box display='flex' alignItems='center'>
          <Tooltip
            title={tooltip}
            placement={
              (tooltipPlacement && tooltipPlacement) || DEFAULT_PROPS.placement
            }
          >
            <Button
              onClick={onClick}
              type='text'
              icon={iconNode || iconNodeLeft || iconNodeRight}
              {...props}
              danger={false}
            />
          </Tooltip>
          {!divided ? null : (
            <Divider type='vertical' mr={3} height={24} top='unset' />
          )}
        </Box>
      ) : (
        <Box display='flex' alignItems='center'>
          <Button
            onClick={onClick}
            type='text'
            icon={iconNode || iconNodeLeft}
            {...props}
            danger={false}
          >
            {text}
            {iconNodeRight}
          </Button>
          {!divided ? null : (
            <Divider type='vertical' mr={3} height={24} top='unset' />
          )}
        </Box>
      )}
    </Fragment>
  )
}

Back.propTypes = {
  /**
   * Use to add text label for button
   */
  text: PropTypes.string,
  /**
   * Use to add icon at the left side inside button (shortcut, worked the same as property "iconLeft")
   */
  icon: PropTypes.node,
  /**
   * Use to add icon at the left side inside button (worked the same as property "icon")
   */
  iconLeft: PropTypes.node,
  /**
   * Use to add icon at the right side inside button (worked the same as property "icon")
   */
  iconRight: PropTypes.node,
  /**
   * Set the handler to handle click event
   */
  onClick: PropTypes.func,
  /**
   * Use to enable tooltip and specify text for it
   */
  tooltip: PropTypes.string,
  /**
   * Use to specify tooltip position
   */
  tooltipPlacement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
  ]),
  /**
   * Use to enable divider at the right side from the button
   */
  divided: PropTypes.bool
}
Back.defaultProps = {
  tooltipPlacement: 'topLeft'
}

export default Back
