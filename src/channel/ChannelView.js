// @flow

import React from 'react'
import {compose, setDisplayName, withProps, withState} from 'recompose'
import {Confirm, Dropdown} from 'semantic-ui-react'
import {Section} from '../component'
import Page from '../component/Page'
import SearchInterface from '../component/searchInterface'
import values from 'lodash/values'
import {ActionCards} from '../component/ActionCard'
import {withLoader} from '../component/Loading'
import {EventCards} from '../component/EventCards'
import Header from '../component/Header'
import {connect} from 'react-redux'

const channelContainer = compose(
  setDisplayName('ChannelItemView'),
  connect(
    state => ({
      route: state.router.route,
      channelRoot: state.db['channel@root'],
      currentUser: state.user && state.user.currentUser,
    }),
  ),
  withLoader(props => {
    let ready = props.currentUser && props.currentUser.uid && props.channelRoot
    return !ready;
  }),
  withProps(props => {
    let key = props.route.params.key;
    let channel = props.channelRoot.item[key]
    return {
      channel: {
        id: channel.id,
        label: channel.label,
        description: channel.description,
        actions: values(channel.action),
        messages: values(channel.item),
      },
    }
  }),
  withState('confirmDeleteOpen', 'setConfirmDeleteOpen', false),
);

const ChannelItemView = ({
                           channel,
                           dispatch,
                           confirmDeleteOpen,
                           setConfirmDeleteOpen,
                         },) => {
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
        <ActionCards items={channel.actions}/>
      </Section>

      <Section>
        <Header content="Events"/>
        <EventCards items={channel.messages}/>
      </Section>

    </Page>
  );
};

export default channelContainer(ChannelItemView);
