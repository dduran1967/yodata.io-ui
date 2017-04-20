import React from 'react';
import {compose, withState, withHandlers} from 'recompose';
import {Icon} from './index';

const TextAreaInlineEditView = (
  {editorState, handleChange, setEditorState, toggleEditor, ...props},
) => (
  <form className="ui form" style={{position: 'relative'}}>
    <Icon
      name={editorState.disabled ? 'edit' : 'cancel'}
      link={true}
      corner={true}
      style={{position: 'absolute', top: '.5em', right: '.5em'}}
      onClick={toggleEditor}
    />
    <textarea
      value={editorState.nextValue}
      onChange={handleChange}
      onBlur={e => {
        setEditorState({...editorState, disabled: true});
        props.onBlur(editorState);
      }}
      disabled={editorState.disabled}
      style={
        editorState.disabled
          ? {borderColor: 'transparent', height: 'auto'}
          : {borderColor: 'blue', boxShadow: '8px 8px 13px 2px #ccc'}
      }
    />
  </form>
);

const textAreaInlineEditContainer = compose(
  withState('editorState', 'setEditorState', props => ({
    value: props.content,
    nextValue: props.content,
    disabled: true,
  })),
  withHandlers({
    handleChange: ({editorState, setEditorState}) =>
      event => {
        setEditorState({...editorState, nextValue: event.target.value});
      },
    toggleEditor: ({editorState, setEditorState}) =>
      event => {
        let next = {...editorState};
        if (!next.disabled) {
          // cancel / reset
          next.nextValue = next.value;
        }
        next.disabled = !next.disabled;
        setEditorState(next);
      },
  }),
);

export default textAreaInlineEditContainer(TextAreaInlineEditView);
