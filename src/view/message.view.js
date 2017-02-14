import React from 'react';
import {observer} from 'mobx-react';
import {Section, PageHeader, Icon} from '../component';
import ui from '../store/ui';
import messageStore from '../store/message';

class MessageView extends React.Component {
  render() {
    let {messageId} = this.props.params;
    let message = messageStore.get(messageId);
    return (
      <div>
        <PageHeader>
          {!ui.sidebar.open &&
          <a href="#" onClick={ui.toggleSidebar}><Icon name="menu" style={{marginRight: '1em'}}/></a>
          }
          <h3 className="title">{message.name}</h3>
        </PageHeader>

        <div className="mx-3">
          <Section>
            <h4>{message.name}</h4>
            {message.description}
          </Section>
        </div>

      </div>
    )
  }
}

export default observer(MessageView);