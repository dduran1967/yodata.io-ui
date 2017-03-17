import React from 'react';
import {connect} from 'react-redux';

export default SendEvent => () => (
  <Section>
    <SectionTitle>SEND EVENT</SectionTitle>

    <HttpCodeExample
      url={'http://...'}
      method="post"
      body={'message'}
      contentType="text/plain"
      title="REQUEST"
    />
    <HttpCodeExample
      title="RESPONSE"
      status="201 Created"
      headers={{
              Location: stream.url + 'e95d2430...'
            }}
      body="Created"
    />
  </Section>
)