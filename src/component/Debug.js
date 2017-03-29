import React from 'react'

const Debug = props => (
  <div key={props.id} onClick={props.onClick}>
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
  </div>
)

export default Debug;