import React from 'react';
import {CodeEditor} from '../component';
import ActionNav from './action.nav';


const ed = {
  type:       'RegisterAction',
  agent:      {
    type:       'Person',
    givenName:  'Alice',
    familyName: 'Jones',
    email:      'alice@example.com',
  },
  instrument: {
    type: "SoftwareApplication",
    id:   "http://realestatedigital.com/"
  },
  object:     {
    type: "Website",
    id:   "http://yourwebsite.com"
  }
}

const exampleData = JSON.stringify(ed, null, 2)

// const exampleCode = `
// const dns = require('dns');
// module.exports = function (context, callback) {
//   return dns.resolve(context.query.url, callback);
// };
// `

class CodeView extends React.Component {
  render() {
    let {user, docs} = this.props.store;
    return (
      <div className="px-3">

        <ActionNav/>

        <section className="card">
          <CodeEditor value={exampleData}/>
          <div className="card-block d-flex justify-content-between">
            <span className="btn btn-outline-success">POST</span>
            <input className="form-control mx-1" type="text" defaultValue={user.inbox}/>
            <button
              className="btn btn-success"
              onClick={()=> docs.post({url: user.inbox, data: exampleData}) }
            >SEND
            </button>
          </div>
        </section>

      </div>
    )
  }
}

export default CodeView;
