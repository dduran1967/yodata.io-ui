// @flow

import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import '../style/codemirror.css'
import {codeBlockContainerStyle} from './CodeBlock'
import stringify from './stringify'

export const codeMirrorDefaultProps = {
  options: {
    lineNumbers: true,
    mode: {name: 'javascript', json: true},
    theme: 'base16-dark',
  },
}

type CodeEditorProps = {
  value: string | Object,
  onChange?: (string) => void,
  editorOptions?: Map<string, any>,
  style?: Map<string, string>
}

const CodeEditor = (props: CodeEditorProps) => {
  const value = (typeof props.value === 'object' ? stringify(props.value) : props.value )
  const options = {...codeMirrorDefaultProps.options, ...props.editorOptions}
  return (
    <div style={{...codeBlockContainerStyle, ...props.style}}>
      <CodeMirror
        value={value}
        onChange={props.onChange}
        options={options}
      />
    </div>
  )
};

export default CodeEditor;
