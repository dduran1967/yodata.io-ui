import React from 'react'
import {branch, renderComponent} from 'recompose'
import {createAction} from 'redux-actions'

const initialState = false;

export const setLoading = createAction('SET_LOADING')

export const loadingActions = {
  setLoading
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.payload
    default:
      return state;
  }
}

export class Loading extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <img src="/bars.svg" role="presentation" style={{opacity:'.5'}}/>
      </div>
    )
  }
}

export const withLoader = isLoading =>
  branch(
    isLoading,
    renderComponent(Loading)
  )

export default withLoader;
