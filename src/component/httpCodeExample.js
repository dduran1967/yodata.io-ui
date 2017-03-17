import React from 'react'

const entries = Object.entries;
let newline = '\n';

const HttpCodeExample = props => {
  let content = '';
  if(props.method && props.url) {
    let method = props.method.toUpperCase();
    content = content.concat(newline + `${method} ${props.url} HTTP/1.1`)
  }
  if (props.status) {
    content = content.concat(newline + props.status);
  }
  if (props.headers) {
    content += `\n`;
    entries(props.headers).forEach(([k,v]) => {
      content = content.concat(`\n${k}: ${v}`);
    })
  }
  if (props.contentType) {
    content = content.concat(newline + `content-type: ` + props.contentType);
  }
  if (props.body) {
    content = content.concat(newline + newline + props.body);
  }
  if (props.json) {
    content = content.concat(JSON.stringify(props.json,null,3));
  }
  return (
    <div>
      {props.comment &&
        <div className="bg-info p-3 my-3 strong">
          {props.comment}
        </div>
      }
      <div className="bg-faded px-3 py-2">
        <pre><code>{content}</code></pre>
      </div>
    </div>

  )
}

export default HttpCodeExample
