import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/shell/shell';

const defaultOptions = {
  lineNumbers: true,
  mode:        {name: 'javascript', json: true},
  theme:       'mdn-like',
};

const CodeEditor = props =>
  <div>
    <CodeMirror
      value={props.value}
      onChange={props.onChange}
      options={defaultOptions}
    />
  </div>

export default CodeEditor;
