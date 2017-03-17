import React from 'react'
import {PageHeader} from '../component'

const Debug = props => (
  <div>
    {props.title && <PageHeader title={props.title}/>}
    <div className="p-3">
      <pre className="bg-faded p-3"><code>{JSON.stringify(props, null, 2)}</code></pre>
    </div>
  </div>
)

export default Debug;