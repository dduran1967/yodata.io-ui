// @flow

import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import '../style/codemirror.css'
import {codeBlockContainerStyle} from './CodeBlock';


const defaultOptions = {
  lineNumbers: true,
  mode: {name: 'javascript', json: true},
  theme: 'base16-dark',
};

const CodeEditor = (props: {value: string, onChange?: any}) => (
  <div style={codeBlockContainerStyle}>
    <CodeMirror
      value={props.value}
      onChange={props.onChange}
      options={defaultOptions}
    />
  </div>
);

CodeEditor.PropTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  options: React.PropTypes.object,
};

export default CodeEditor;
