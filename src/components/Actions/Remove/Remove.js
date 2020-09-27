import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Tooltip, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const DEFAULT_PROPS = {
  placement: 'bottom'
}

const ClinicRemove = (props) => {
  const {
    label,
    popconfirmPlacement,
    type,
    shape,
    icon,
    iconLeft,
    iconRight,
    onSubmit,
    confirmLabel,
    onCancel,
    cancelLabel,
    tooltip,
    tooltipPlacement,
    question,
    itemName
  } = props

  const iconNode = typeof icon === 'boolean' ? <DeleteOutlined /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <DeleteOutlined /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <DeleteOutlined /> : iconRight

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
      onConfirm={onSubmit}
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
      placement={popconfirmPlacement}
    >
      {!label && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          title={tooltip}
          placement={
            (tooltipPlacement && tooltipPlacement) || DEFAULT_PROPS.placement
          }
        >
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={iconNode || iconNodeLeft}
          danger
        >
          {label}
          {iconNodeRight}
        </Button>
      )}
    </Popconfirm>
  )
}

ClinicRemove.propTypes = {
  label: PropTypes.string,
  popconfirmPlacement: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  // icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func,
  cancelLabel: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  question: PropTypes.string,
  itemName: PropTypes.string
}

export default ClinicRemove
