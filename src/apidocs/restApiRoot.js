import React from 'react';
import {HttpCodeExample} from '../component';
import { Header, Message } from 'semantic-ui-react';
import Page from '../component/Page'
import Section from '../component/Section'

export default () => (
  <Page>

    <Header content="REST API"/>
    <p>
      You can use any Database URL as a REST endpoint. All you need to do is append .json to the end of the URL
      and send a request from your favorite HTTPS client.
    </p>

    <p>HTTPS is required to make sure your data remains safe.</p>

    <Header>GET - Reading Data</Header>

    <p>
      Data from your Realtime Database can be read by issuing an HTTP GET request to an endpoint. The following
      example demonstrates how you might retrieve a user's name that you had previously stored in Realtime
      Database.
    </p>

    <HttpCodeExample
      request={{
        method: 'get',
        url: 'https://dave.yodata.me/channel/website/',
      }}
      response={{
        body: `{...}`,
      }}
    />

    <p>
      A successful request is indicated by a 200 OK HTTP status code. The response contains the data associated with
      the path in the GET request.
    </p>

    <div className="ui divider" />

    <Header>PUT - Writing Data</Header>

    <p>Writes data to the provided resource.</p>

    <HttpCodeExample
      request={{
        method: 'PUT',
        url: '/users/jack/.json',
        json: {name: 'Rob'},
      }}
      response={`[none]`}
    />

    <Message
      icon="warning"
      header="Warning"
      content="PUT replaces the entire object at a location, use with caution to avoid losing data."
      error
    />

    <HttpCodeExample
      request={{
        method: 'PUT',
        url: '/users/jack/name.json',
        body: `"Robert"`,
      }}
      response={`[none]`}
    />

    <p>
      You can also write deep property values independently from the parent object
    </p>

    <p>
      A successful request is indicated by a 200 OK HTTP status code. The response contains the data specified in
      the PUT request.
    </p>

    <div className="ui divider" />

    <Header>POST - Pushing Data</Header>

    <p>
      To accomplish the equivalent of the JavaScript push() method (see Lists of Data),
      you can issue a POST request.
    </p>

    <HttpCodeExample
      request={{
        method: 'post',
        url: '/inbox',
        json: {name: 'dave'},
      }}
      response={{
        json: {
          name: '-KguGSWQH-pf9rQ6Dq3b',
        },
      }}
    />
  </Page>
);
