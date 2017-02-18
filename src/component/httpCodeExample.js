import React from 'react'

const HttpCodeExample = props => {
  if(!props.url) return null;
  let body = props.body;
  let url = new URL(props.url);
  let method = String.prototype.toUpperCase.call(props.method);
  let contentType = 'application/json';
  let content = `
${method} ${url.pathname} HTTP/1.1
Host: ${url.host}
Content-Type: ${contentType}

${body}
`
  return (
    <div className="bg-faded px-3 py-1">
      <pre><code>{content}</code></pre>
    </div>
  )
}

export default HttpCodeExample
