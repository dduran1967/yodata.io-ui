// @flow
import React from 'react'
import NotificationSytem from 'react-notification-system'
import {createAction} from 'redux-actions'
import {connect} from 'react-redux'

type Action = {
  +type: string,
  payload?: any,
  meta?: any
}

type NotificationState = {
  next: Action | null;
}

export const send = createAction('NOTIFICATIONS/SEND')

const notificationsInitialState = {
  next: null,
}

export function notificiationsReducer(state: NotificationState = notificationsInitialState, action: Action): NotificationState {
  switch (action.type) {
    case 'NOTIFICATIONS/ADD':
      return {
        ...state,
        next: action.payload,
      }
    default:
      return state;
  }
}

class Notifications extends React.Component {
  _notificationSytem = null;

  componentWillReceiveProps({notifications}) {
    console.debug('receiving props', notifications.next);
    if (notifications && notifications.next) {
      console.debug('adding notification', notifications.next);
      this._notificationSystem.addNotification(notifications.next)
    }
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem
  }

  render() {
    return <NotificationSytem ref="notificationSystem"/>
  }
}


export default connect(state => ({notifications: state.notifications}))(Notifications)