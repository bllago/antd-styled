import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { DEFAULT_PROPS } from './constants'

const ClinicCreate = (props) => {
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
  return (
    <Fragment>
      {!label && shape && (icon || iconLeft || iconRight) ? (
        <Tooltip title={tooltipLabel || DEFAULT_PROPS.tooltipLabel}>
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={icon || iconLeft || iconRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={icon || iconLeft}
          danger={false}
          onClick={onClick}
        >
          {label}
          {iconRight}
        </Button>
      )}
    </Fragment>
  )
}

ClinicCreate.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  tooltipLabel: PropTypes.string
}

export default ClinicCreate
