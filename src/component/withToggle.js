// @flow

import {compose, withState} from 'recompose'

const withToggle = (propName: string, initialValue: boolean) => {
  return compose(
    withState(propName, `toggle_${propName}`, initialValue)
  )
}

export default withToggle
