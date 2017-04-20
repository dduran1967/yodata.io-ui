// @flow

import React from "react";
import {
  backgroundColor,
  color,
  createStyle,
  padding,
  darkGray,
  veryLightGray
} from "../style/theme.js";

export const codeBlockContainerStyle = createStyle(
  padding(1, 2),
  backgroundColor(darkGray),
  color(veryLightGray)
)({});

export default function CodeBlock(content: any) {
  return (
    <div style={codeBlockContainerStyle}>
      <pre><code>{content}</code></pre>
    </div>
  );
}
