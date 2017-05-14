// @flow

import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import '../style/codemirror.css'
import {codeBlockContainerStyle} from './CodeBlock'
import stringify from './stringify'
import { compose, withProps } from 'recompose';

const CodeEditor = compose(
  withProps(props => ({
    value: typeof props.value === 'object' ? stringify(props.value) : props.value,
    options: {
      lineNumbers: false,
      mode: {name: 'javascript', json: true},
      readOnly: props.hasOwnProperty('readOnly'),
      matchTags: true,
      ...props.options
    },
    style: {...codeBlockContainerStyle, ...props.style}
  }))
)(props => {
  return (
    <CodeMirror
      value={props.value}
      onChange={props.onChange}
      options={props.options}
    />
  )
})

export default CodeEditor;
