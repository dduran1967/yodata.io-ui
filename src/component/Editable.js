// @flow

import React from "react";
import {
  compose,
  renderComponent,
  withHandlers,
  withProps,
  withState
} from "recompose";
import Debug from '../component/Debug'

const EditableView = ({nextValue, dirty, onChange}) => {
  const indicatorStyle = {
    display: "block",
    height: "100%",
    width: ".5em",
    backgroundColor: dirty ? "red" : "green"
  };
  return (
    <form className="ui form">
      <div style={indicatorStyle} />
      <textarea style={{minHeight: '5.5em', height: 'auto'}} contentEditable value={nextValue} onChange={onChange}/>
    </form>
  );
};

const editableContainer = compose(
  withState("viewState", "setViewState", props => ({value: props.value, nextValue: props.value, dirty: false})),
  withProps(({ viewState }) => ({
    nextValue: viewState.nextValue,
    dirty: viewState.value !== viewState.nextValue
  })),
  withHandlers({
    onFocus: props => event => console.log(props, event),
    onBlur: props => event => console.log(props, event),
    onChange: props => event => console.log(props, event)
  })
);

export default editableContainer(EditableView);
