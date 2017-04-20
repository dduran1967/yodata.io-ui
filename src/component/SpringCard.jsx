import React from "react";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";
import CodeEditor from "./CodeEditor";
import stringify from "./stringify";

export default function SpringCard({
  header,
  meta,
  description,
  content,
  extra,
  json,
  toggle,
  open,
  potentialAction,
  dispatch
}) {
  if (typeof json === "object") {
    content = <CodeEditor value={stringify(json)} />;
  }
  if (potentialAction) {
    extra = (
      <ButtonGroup>
        <Button content={"send"} onClick={e => dispatch(potentialAction)} />
      </ButtonGroup>
    );
  }
  return (
    <div className="ui fluid card" style={{ position: "relative" }}>
      <div className="content">
        <div className="header">{header}</div>
        <div className="meta">{meta}</div>
        <div className="description">{description}</div>
      </div>
      {open && content}
      {open && extra && <div className="extra">{extra}</div>}
      {toggle &&
        <Icon
          link={true}
          name="expand"
          onClick={toggle}
          style={{ position: "absolute", top: ".5em", right: ".5em" }}
        />}
    </div>
  );
}
