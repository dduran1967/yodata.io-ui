import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/shell/shell';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    console.debug('init code editor with props', {...props})
    this.state = {
      value: props.value
    }
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode = (v) => {
    this.setState({
      value: v
    })
  }

  render() {
    let options = {
      lineNumbers: true,
      mode:        {name: 'javascript', json: true},
      theme:       'mdn-like',
    }
    return (
      <div>
        <CodeMirror
          value={this.state.value}
          onChange={this.updateCode}
          options={options}
        />
      </div>
    )
  }
}

export default CodeEditor;
