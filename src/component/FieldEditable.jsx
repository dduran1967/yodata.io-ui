import React from 'react'
import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose'

const fieldEditableContainer = compose(
  connect(
    (state, props) => {
      if (props && props.id) {
        return {
          dbValue: state.db[props.id]
        }
      }
    }
  ),
  withState('fieldEditable', 'setFieldEditable', props => ({
    id:        props.id,
    value:     props.value,
    nextValue: props.value,
    editing:   false,
    dirty:     false
  })),
  withHandlers({
    setEditing:  ({fieldEditable, setFieldEditable}) => (val: boolean) => {
      setFieldEditable({...fieldEditable, editing: val})
    },
    setDirty:    ({fieldEditable, setFieldEditable}) => (val: boolean) => {
      setFieldEditable({...fieldEditable, dirty: val})
    },
    handleInput: ({fieldEditable, setFieldEditable}) => event => {
      setFieldEditable({...fieldEditable, nextValue: event.target.innerText});
    },
    saveChanges: ({fieldEditable, dispatch}) => (event) => {
      let {id, value, nextValue} = fieldEditable
      dispatch({type: 'DB/SET', payload: {id, value, nextValue}})
    }
  })
)

const FieldEditable = ({id, className, value, nextValue, handleInput, saveChanges, fieldEditable}) =>
  <div
    contentEditable={true}
    key={id}
    className={className}
    onInputCapture={handleInput}
    onBlurCapture={saveChanges}
  >
    {fieldEditable.nextValue}
  </div>

export default fieldEditableContainer(FieldEditable)