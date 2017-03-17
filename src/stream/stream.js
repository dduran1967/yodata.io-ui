import React, {PropTypes} from 'react';

const Stream = ({name}) => (
  <div className="px-3">

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
        contentType="text/plain"
        comment={` note: use content-type of text/plain (not application/json) pending bugfix in next release\n`}
      />
      <div>RESPONSE</div>
      <HttpCodeExample
        status="201 Created"
        headers={{
              Location: stream.url + 'e95d2430...'
            }}
        body="Created"
      />
    </section>

    {/* <section className="mb-4">
     <h6 className="section-title">SEND TEST EVENT</h6>
     <div className="d-flex justify-content-between mb-3">
     <div className="btn btn-outline-success">POST</div>
     <input className="form-control mx-1" type="text" defaultValue={stream.url}/>
     <button
     className="btn btn-primary"
     onClick={() => stream.sendMessage(JSON.parse(this.state.messageData))}>SEND
     </button>
     </div>
     </section>

     {stream.items.length > 0 &&
     <section className="mb-4">
     <StreamEventsView stream={stream} items={stream.items}/>
     </section>
     } */}

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