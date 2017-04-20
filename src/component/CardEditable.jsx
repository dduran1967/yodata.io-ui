// @flow

import React from "react";
import { compose, withHandlers, withState } from "recompose";
import { Icon } from "semantic-ui-react";

function CardEditor({
  header,
  meta,
  description,
  extra,
  editing,
  toggleEditor,
  setEditing,
  handleInput,
  saveChanges
}) {
  return (
    <div className="ui fluid card">
      <div className="content" style={{ position: "relative" }}>
        <Icon
          name="circle"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            color: editing ? "red" : "green"
          }}
          onClick={toggleEditor}
        />
        <div
          name="header"
          className="header"
          contentEditable={editing}
          onInputCapture={handleInput}
          onBlurCapture={saveChanges}
        >
          {header}
        </div>
        <div name="meta" className="meta">{meta}</div>
        <div
          name="description"
          className="description"
          contentEditable={editing}
          onInputCapture={handleInput}
          onBlurCapture={saveChanges}
        >
          {description}
        </div>
      </div>
      {extra && <div className="extra">{extra}</div>}
    </div>
  );
}

const cardEditorContainer = compose(
  withState("editing", "setEditing", false),
  withState("next", "setNext", ({ header, description }) => ({
    header,
    description
  })),
  withHandlers({
    toggleEditor: ({ editing, setEditing }) => event => setEditing(!editing),
    handleInput: ({ next, setNext }) => event => {
      let key = event.target.getAttribute("name");
      let value = event.target.innerText;
      setNext({ ...next, [key]: value });
    },
    saveChanges: ({ next, dispatch }) => () => {
      dispatch({ type: "DB/UPDATE", payload: { next } });
    }
  })
);

export default cardEditorContainer(CardEditor);
