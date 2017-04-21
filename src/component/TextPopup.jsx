// @flow

import React from 'react'
import {Popup} from 'semantic-ui-react'

export default function TextPopup({trigger, content}: { trigger: string, content: string }) {
  const triggerStyle = {
    borderBottom: 'dashed 1px blue',
    margin: '0px 4px',
    cursor: 'pointer'
  }
  return <Popup trigger={<span style={triggerStyle}>{trigger}</span>} content={content}/>
}