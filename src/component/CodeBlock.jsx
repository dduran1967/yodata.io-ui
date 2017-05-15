// @flow

import React from "react";
import {
  backgroundColor,
  color,
  createStyle,
  padding,
} from "../style/theme.js";

export const codeBlockContainerStyle = createStyle(
  padding(1, 2),
  backgroundColor("#eee"),
  color("#333")
)({});

export default function CodeBlock(
  props: { content: React.Children, style?: Map<string, any> }
) {
  return (
    <div style={codeBlockContainerStyle}>
      <pre><code>{props.currentValue && props.currentValue.text}</code></pre>
    </div>
  );
}
