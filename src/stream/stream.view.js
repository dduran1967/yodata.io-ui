import React from 'react';
import {observer} from 'mobx-react';
import {Link,} from '../component';
import StreamEventsView from './stream-events-view'
import HttpCodeExample from '../component/httpCodeExample';

const ed =
{ type: 'RegisterAction',
  agent: {
    type: 'Person',
    givenName: 'Alice',
    familyName: 'Jones',
    email: 'alice@example.com'
  },
  instrument: {
    type: "SoftwareApplication",
    id: "http://realestatedigital.com/",
  },
  object: {
    type: "Website",
    id: "http://yourwebsite.com"
  }
}

const exampleData = JSON.stringify(ed, null, 3)

class StreamView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData: exampleData
    }
  }

  updateMessageData = (v) => this.setState({messageData: v})

  render() {
    let {store, match} = this.props;
    let streamName = match.params.streamName;
    let streams = store.streams;
    let stream = streams.get(streamName);
    console.debug('stream=',stream);
    if (!stream)
      return null;

    return (
      <div className="px-3">

        <h1>StreamView</h1>

        <section className="mb-4">
          <h6 className="section-title">ACCEPTS ACTIONS:</h6>
          <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
              <div>RegisterAction</div>
              <div><Link to="/action/view/#http://schema.org/RegisterAction">SCHEMA</Link></div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h6 className="section-title">SEND EVENT</h6>

          <HttpCodeExample
            url={stream.url}
            method="post"
            body={this.state.messageData}
          />

        </section>

        <section className="mb-4">
          <h6 className="section-title">SEND TEST EVENT</h6>
          <div className="d-flex justify-content-between mb-3">
            <div className="btn btn-outline-success">POST</div>
            <input className="form-control mx-1" type="text" defaultValue={stream.id}/>
            <button
              className="btn btn-success"
              onClick={() => stream.createOnNext(JSON.parse(this.state.messageData))}>SEND
            </button>
          </div>
        </section>

        {stream.items.length > 0 &&
          <section className="mb-4">
            <StreamEventsView stream={stream} values={stream.values}/>
          </section>
        }

        <section className="mb-4">
          <h6 className="section-title">GET AN EVENT</h6>
          <HttpCodeExample
            url={stream.url+'[eventid]'}
            method="get"
            body={JSON.stringify(stream.currentValue,null,3)}
          />
        </section>

      </div>
    )
  }
}

export default observer(StreamView);
