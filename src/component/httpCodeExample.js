// @flow

import trim from 'lodash/trim'
import React from 'react'

const entries = Object.entries;
const newline = '\n';

function processHttpRequestResponseContent(input): string {
  let content = '';
  if (input.method && input.url) {
    input.method = input.method.toUpperCase();
    content = content.concat(newline + `${input.method} ${input.url} HTTP/1.1`)
  }
  if (status) {
    content = content.concat(newline + status + newline);
  }
  if (input.headers) {
    content += `\n`;
    entries(input.headers).forEach(([k, v]) => {
      content = content.concat(`\n${k}: ${v}`);
    })
  }
  if (input.contentType) {
    content = content.concat(newline + `content-type: ` + input.contentType);
  }
  if (input.body) {
    content = content.concat(newline + newline + input.body);
  }
  if (input.json) {
    content = content.concat(JSON.stringify(input.json, null, 3));
  }
  return trim(content);
}


export default class HttpCodeExample extends React.Component {
  props: {
    request: {
      method: string,
      contentType: string,
      headers: {},
      url: string,
      body: string,
      status: string
    },
    response: {
      contentType: string,
      headers: {},
      body: string,
      json: {},
      status: string,
    },
    comment: string
  }

  static defaultProps = {
    method: 'GET',
  }

  render() {
    let request = processHttpRequestResponseContent(this.props.request)
    let response = processHttpRequestResponseContent(this.props.response)
    return (
      <div style={{marginBottom: '1em'}}>
        {this.props.comment}
        <div className="ui inverted basic segment">
          {this.props.request &&
            <div>
              REQUEST:
              <pre><code style={{color: 'lime'}}>{request}</code></pre>
            </div>

          }
          {this.props.response &&
          <div>
            RESPONSE:
            <pre><code style={{color: 'lime'}}>{response}</code></pre>
          </div>
          }
        </div>
      </div>
    )
  }
}