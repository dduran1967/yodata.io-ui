import React from 'react';
import {observer} from 'mobx-react';
import {ListGroup, ListGroupItemAction, MessageListItem, PageHeader, Icon, Link} from '../component';
import messages from '../store/message';
import ui from '../store/ui';

class MessagesView extends React.Component {

  render() {
    let items = messages.list().map(message => {
      return (
        <ListGroupItemAction key={message.id}>
          <Link to={'/messages/' + message.id}>
            <MessageListItem
              name={message.name}
              description={message.description}
            />
          </Link>
        </ListGroupItemAction>
      )
    });
    return(
      <div>
        <PageHeader>
          {!ui.sidebar.open &&
          <div href="#" onClick={ui.toggleSidebar}><Icon name="menu" style={{marginRight: '1em'}}/></div>
          }
          <h3 className="title">Event History</h3>
        </PageHeader>
        <div>
          <ListGroup>
            {items}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default observer(MessagesView);