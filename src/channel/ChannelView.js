// @flow

import React from 'react';
import {compose, withHandlers, flattenProp, withState} from 'recompose';
import {Message} from 'semantic-ui-react';
import {Header, Section} from '../component';
import EventList from '../component/EventList.js';
import Page from '../component/Page';
import {subscribeTo} from '../db/index';
import SearchInterface from '../component/searchInterface';
import values from 'lodash/values';
import {Debug} from '../component/index';

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

const enhance = compose(
  subscribeTo(props => [props.route.path]),
  flattenProp('data'),
);

const ChannelView = enhance(({id, label, action = {}, item = {}, dispatch}) => {
  let actions = values(action);
  let items = values(item);
  return (
    <Page>
      <Section>
        <Header icon="hashtag" content={label} />
      </Section>

      <Section>
        <Header
          content="Action Types"
          subheader="Actions not on this list will be rejected by this channel"
        >
          <SearchInterface
            onResultSelect={(e, selected) =>
              dispatch({
                type: 'CHANNEL/ADD_ACTION',
                payload: {
                  channel: id,
                  action: selected.id,
                },
              })}
          />
        </Header>
        {action.length === 0 &&
          <Message>
            This channel will accept any action type. To limit your channel
            to a set of specific types, add them here.
          </Message>}
        {actions.map(data => <ActionListItem {...{id: data.id, data: data}} />)}
      </Section>

      <Section>
        <Header content="Events" />
        <EventList items={items} />
      </Section>

      <Debug {...{id, label, action, item}} />

    </Page>
  );
});

export default enhance(ChannelView);
