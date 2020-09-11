import React from 'react'
import { Skeleton as AntSkeleton } from 'antd'
import styled from 'styled-components'

const StyledAntSkeleton = styled(AntSkeleton)`
  .ant-skeleton-content .ant-skeleton-title {
    border-radius: ${(props) =>
      props &&
      props.theme &&
      props.theme.borderRadius &&
      props.theme.borderRadius.sm};
  }
  .ant-skeleton-content .ant-skeleton-paragraph > li {
    border-radius: ${(props) =>
      props &&
      props.theme &&
      props.theme.borderRadius &&
      props.theme.borderRadius.sm};
  }
`

const Skeleton = (props) => {
  return <StyledAntSkeleton {...props} active />
}

export default Skeleton
