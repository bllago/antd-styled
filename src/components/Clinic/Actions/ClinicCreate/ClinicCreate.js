import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip, Popover } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

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
    tooltipLabel,
    popover,
    popoverContent,
    popoverTrigger,
    form,
    formContent
  } = props

  const iconNode = typeof icon === 'boolean' ? <PlusCircleFilled /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <PlusCircleFilled /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <PlusCircleFilled /> : iconRight

  const actionLayout =
    !label && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
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
    )

  return (
    <React.Fragment>
      {popover && !form && (
        <Popover trigger={popoverTrigger} content={popoverContent}>
          {actionLayout}
        </Popover>
      )}
      {form && !popover && formContent}
      {!form && !popover && actionLayout}
    </React.Fragment>
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
