import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { EditFilled } from '@ant-design/icons'

import { DEFAULT_PROPS } from './constants'

const ClinicEdit = (props) => {
  const {
    label,
    icon,
    iconLeft,
    iconRight,
    onClick,
    shape,
    tooltipLabel
  } = props

  const iconNode = typeof icon === 'boolean' ? <EditFilled /> : icon
  const iconNodeLeft = typeof iconLeft === 'boolean' ? <EditFilled /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <EditFilled /> : iconRight

  return (
    <Fragment>
      {!label && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip title={tooltipLabel || DEFAULT_PROPS.tooltipLabel}>
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
          {label}
          {iconNodeRight}
        </Button>
      )}
    </Fragment>
  )
}

ClinicEdit.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltipLabel: PropTypes.string
}

export default ClinicEdit
