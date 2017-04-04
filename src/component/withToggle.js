
// @flow

import React from 'react'
import {compose, withHandlers, withState} from 'recompose'
import Debug from './Debug'


const withToggle = (config: { propName: string, initialValue: boolean }) => {
  return compose(
    withState(config.propName, `toggle_${config.propName}`, config.initialValue)
  )
}

export default withToggle
