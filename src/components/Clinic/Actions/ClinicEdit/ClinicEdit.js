import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
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
  return (
    <Fragment>
      {!label && shape && (icon || iconLeft || iconRight) ? (
        <Tooltip title={tooltipLabel || DEFAULT_PROPS.tooltipLabel}>
          <Button
            {...props}
            icon={icon || iconLeft || iconRight}
            danger={false}
            onClick={onClick}
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
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
