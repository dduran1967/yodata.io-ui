// @flow

import React from 'react';
import {compose, withHandlers, flattenProp, withState} from 'recompose';
import {Button, Message, Segment, HeaderContent} from 'semantic-ui-react';
import {Header, Section} from '../component';
import EventList from '../component/EventList.js';
import Page from '../component/Page';
import {map} from 'mobx';
import {types, subTypesOf} from '../schema/schema_interface';
import {createChannel} from './channelActions';
import {subscribeTo} from '../db/index';
import Debug from '../component/Debug';
import SearchPill from '../component/SearchPill';
import {SearchDebug} from '../component/searchInterface';

const withShowContentToggle = compose(
  withState('showContent', 'setShowContent', false),
  withHandlers({
    toggleShowContent: ({showContent, setShowContent}) =>
      () => {
        setShowContent(!showContent);
      },
  }),
);

const withToggle = compose(
  withShowContentToggle,
  withHandlers({
    onHeaderClick: props =>
      (event, id) => {
        event.preventDefault();
        props.toggleShowContent();
        props.fetchMessage(id);
      },
  }),
);

const ListItem = ({id, label, data, showContent, onHeaderClick}) => (
  <div key={id} style={{marginBottom: '.5em'}}>
    <div className="ui top attached menu">
      <div className="text item">{label || id}</div>
      <div className="right menu">
        <a className="item" onClick={e => onHeaderClick(e, id)}>
          <i className={'icon caret ' + (showContent ? 'down' : 'left')} />
        </a>
      </div>
    </div>
    {showContent &&
      data &&
      <div className="ui bottom attached message small secondary">
        <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
      </div>}
  </div>
);

const ActionListItem = withToggle(ListItem);

type Channel = {
  id: string,
  label: string,
  action: Array<string>,
  item: Array<string>,
};

const enhance = compose(
  subscribeTo(props => [props.route.path]),
  flattenProp('data'),
  withHandlers({
    createChannel: ({dispatch}) =>
      (name: string) => dispatch(createChannel(name)),
  }),
);

const ChannelView = ({label, action = [], item = []}) => {
  return (
    <Page>
      <Section>
        <Header icon="hashtag" content={label} />
      </Section>

      <Section>
        <Header content="Action Types">
          <SearchPill />
        </Header>
        {action.length === 0 &&
          <Message basic>
            This channel will accept any action type. To limit your channel
            to a set of specific types, add them here.
          </Message>}
        {action.map(data => <ActionListItem {...{id: data.id, data: data}} />)}
      </Section>

      <Section>
        <Header content="Events" />
        <EventList items={item} />
      </Section>

    </Page>
  );
};

export default enhance(ChannelView);
