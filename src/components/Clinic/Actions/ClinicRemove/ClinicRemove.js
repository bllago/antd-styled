import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Tooltip, Popconfirm } from 'antd'
import { DEFAULT_PROPS } from './constants'

const ClinicRemove = (props) => {
  const {
    label,
    type,
    shape,
    icon,
    iconLeft,
    iconRight,
    onClick,
    confirmLabel,
    onCancel,
    cancelLabel,
    tooltipLabel,
    tooltipPlacement,
    question,
    itemName
  } = props
  return (
    <Popconfirm
      title={
        <Fragment>
          <Typography.Text>
            {question || DEFAULT_PROPS.question}
          </Typography.Text>
          {itemName && <Typography.Text strong> {itemName}</Typography.Text>}
          <Typography.Text>?</Typography.Text>
        </Fragment>
      }
      onConfirm={onClick}
      onCancel={onCancel}
      okButtonProps={{ danger: true }}
      okText={
        confirmLabel && itemName
          ? `Yes, remove ${itemName}`
          : DEFAULT_PROPS.confirmLabel
      }
      cancelText={
        cancelLabel && itemName
          ? `No, keep ${itemName}`
          : DEFAULT_PROPS.cancelLabel
      }
    >
      {!label && shape && (icon || iconLeft || iconRight) ? (
        <Tooltip
          title={tooltipLabel || DEFAULT_PROPS.tooltipLabel}
          placement={tooltipPlacement || DEFAULT_PROPS.tooltipPlacement}
        >
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={icon || iconLeft || iconRight}
            danger
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={icon || iconLeft}
          danger
        >
          {label}
          {iconRight}
        </Button>
      )}
    </Popconfirm>
  )
}

ClinicRemove.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func,
  cancelLabel: PropTypes.string,
  tooltipLabel: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  question: PropTypes.string,
  itemName: PropTypes.string
}

export default ClinicRemove
