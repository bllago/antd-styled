import React, { useContext } from 'react'
import { Skeleton as AntSkeleton } from 'antd'
import styled, { ThemeContext } from 'styled-components'

const Skeleton = (props) => {
  const theme = useContext(ThemeContext)
  const StyledAntSkeleton = styled(AntSkeleton)`
    .ant-skeleton-content .ant-skeleton-title {
      border-radius: ${theme.borderRadius.sm};
    }
    .ant-skeleton-content .ant-skeleton-paragraph > li {
      border-radius: ${theme.borderRadius.sm};
    }
  `
  return <StyledAntSkeleton />
}

export default Skeleton
