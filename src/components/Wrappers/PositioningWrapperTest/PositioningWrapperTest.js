import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@qonsoll/react-design'
import Back from '../../Actions/Back'
// import {
//   CENTERED_CONTENT_DEFAULT_WIDTH,
//   CONTENT_DEFAULT_WIDTH
// } from './constants'

const PositioningWrapperTest = (props) => {
  const {
    children,
    alignMiddle,
    contentWidth,
    onBack,
    backBtnProps,
    divided
  } = props

  return (
    <Box
      height='inherit'
      display='flex'
      justifyContent={alignMiddle && 'center'}
      flexDirection='column'
    >
      {onBack && (
        <Box mb={[2, 2, 2, 0, 0]}>
          <Back onClick={onBack} {...backBtnProps} divided={divided} />
        </Box>
      )}
      <Box
        display={alignMiddle && onBack && 'flex'}
        alignItems={alignMiddle && onBack && 'center'}
        flex={(!alignMiddle || (alignMiddle && onBack)) && 1}
        height={(!alignMiddle || (alignMiddle && onBack)) && '100%'}
        width={alignMiddle && contentWidth}
        ml={alignMiddle && contentWidth && 'auto'}
        mr={alignMiddle && contentWidth && 'auto'}
      >
        {children}
      </Box>
    </Box>
  )
}

PositioningWrapperTest.propTypes = {
  children: PropTypes.node,
  alignMiddle: PropTypes.bool,
  contentWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool
}

export default PositioningWrapperTest
