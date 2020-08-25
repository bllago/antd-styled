import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { SaveFilled } from '@ant-design/icons'

import { DEFAULT_PROPS } from './constants'

const ClinicSave = (props) => {
  const {
    label,
    type,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltipLabel
  } = props

  const iconNode = typeof icon === 'boolean' ? <SaveFilled /> : icon
  const iconNodeLeft = typeof iconLeft === 'boolean' ? <SaveFilled /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <SaveFilled /> : iconRight

  return (
    <Fragment>
      {!label && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip title={tooltipLabel || DEFAULT_PROPS.tooltipLabel}>
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={iconNode || iconNodeLeft}
          danger={false}
          onClick={onClick}
        >
          {label}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
}

ClinicSave.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltipLabel: PropTypes.string
}

export default ClinicSave
