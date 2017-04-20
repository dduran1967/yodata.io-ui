// @flow

import React from 'react';
import {compose, withProps, withState, setDisplayName} from 'recompose';
import {Dropdown, Confirm} from 'semantic-ui-react';
import {Section} from '../component';
import Page from '../component/Page';
import SearchInterface from '../component/searchInterface';
import values from 'lodash/values';
import subscribeTo from '../db/subscribeTo';
import {ActionCards} from '../component/ActionCard';
import {withLoader} from '../component/Loading';
import {EventCards} from '../component/EventCards';
import Header from '../component/Header'
import {Label} from 'semantic-ui-react';


const channelContainer = compose(
  setDisplayName('ChannelItemView'),
  subscribeTo(props => [props.route.path]),
  withLoader(props => {
    let ready = props.data && props.data.id;
    return !ready;
  }),
  withProps(props => ({
    channel: {
      id: props.data.id,
      label: props.data.label,
      description: props.data.description,
      actions: values(props.data.action),
      messages: values(props.data.item),
    },
  })),
  withState('confirmDeleteOpen', 'setConfirmDeleteOpen', false),
);

const ChannelItemView = (
  {
    channel,
    dispatch,
    confirmDeleteOpen,
    setConfirmDeleteOpen,
  },
) => {
  const dropdownConfig = {
    text: 'options',
    button: true,
    options: [
      {
        text: 'delete channel',
        value: 'delete',
        icon: 'delete',
        onClick: () => setConfirmDeleteOpen(true),
      },
    ],
  };
  return (
    <Page>
      <Confirm
        open={confirmDeleteOpen}
        header="Permanently delete this channel?"
        content="Messages will NOT be deleted, but all subscriptions to this channel will be canceled,"
        confirmButton={<button className="ui red button">delete</button>}
        onCancel={() => setConfirmDeleteOpen(false)}
        onConfirm={() => {
          setConfirmDeleteOpen(false);
          dispatch({type: 'CHANNEL/DELETE_CHANNEL', payload: channel.id});
        }}
      />
      <Section>
        <Header as="h1" icon="hashtag" content={channel.label} subheader={channel.subheader}>
          <Dropdown {...dropdownConfig} />
        </Header>
      </Section>

      <Section>
        <Header
          content="Action Types"
          subheader="Channel subscribers only receive these actions."
        >
          <SearchInterface
            icon="add"
            placeholder="Add action type..."
            onResultSelect={(e, selected) =>
              dispatch({
                type: 'CHANNEL/ADD_ACTION',
                payload: {
                  channel: channel.id,
                  action: selected.id,
                },
              })}
          />
        </Header>
        <ActionCards items={channel.actions} />
      </Section>

      <Section>
        <Header content="Events" />
        <EventCards items={channel.messages} />
      </Section>

    </Page>
  );
};

const ChannelView = channelContainer(ChannelItemView);

export default ChannelView;
