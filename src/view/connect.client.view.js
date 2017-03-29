import React from 'react';
import {Hero, PageHeader, Icon, Switch} from '../component';
import ui from '../store/ui';
import {observer} from 'mobx-react';


class ConnectClientView extends React.Component {
  render() {
    const {clientId} = this.props.params;
    const client = store.client.get(clientId);
    return (
      <div>
        <PageHeader className="justify-content-between">
          {!ui.sidebar.open &&
          <a href="#" onClick={ui.toggleSidebar}><Icon name="menu" style={{marginRight: '1em'}}/></a>
          }
          <h3 className="title">{client.name}</h3>
          <div>
            <Switch checked={user.hasClient(client.id)}/>
          </div>
        </PageHeader>

        <Hero
          title={client.name}
          text={client.description}
          logo={client.avatar}
        />

        <div className="px-3">
          <section className="Section">
            <header className="mb-3">
              <h3 className="d-inline mr-3">Integrations</h3>
              <span className="text-muted">{client.name} integrates the following events.</span>
            </header>
            [ message list ]
          </section>
        </div>

      </div>

    )
  }
}

export default observer(ConnectClientView);
