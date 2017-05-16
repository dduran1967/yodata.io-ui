import React from "react";
import { Button, ButtonGroup, Icon } from "semantic-ui-react";
import CodeEditor from "./CodeEditor";
import stringify from "./stringify";
import Link from './Link'

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
  dispatch,
  text,
}) {
  content = (
    <div>
      <div className="description" style={{paddingLeft: '1em'}}>{description}</div>
      <CodeEditor value={text || stringify(json)} />
    </div>
  )

  if (potentialAction) {
    extra = (
      <div>
        <ButtonGroup>
          <Button content={"send to inbox"} onClick={e => dispatch(potentialAction)} />
          <Button><Link name="types/view" params={{id: header}}>View Schema</Link></Button>
        </ButtonGroup>
      </div>

    );
  }
  return (
    <div className="ui fluid card" style={{ position: "relative" }}>
      <div className="content">
        <div className="header">{header}</div>
        <div className="meta">{meta}</div>
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
