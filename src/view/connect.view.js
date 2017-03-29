import React from 'react';
import {observer} from 'mobx-react';
import {CardList, CardListItem, Avatar, Link, PageHeader, Icon} from '../component';

import ui from '../store/ui';
import clientStore from '../store/client';

class ConnectView extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(client) {
    return (
      <CardListItem key={client.id}>
        <div className="card">
          <div className="card-block text-center">
            <Avatar src={client.avatar || client.icon || client.image} name={client.name}/>
          </div>
          <div className="card-block">
            <h5 className="card-title">{client.name}</h5>
            {client.description}
          </div>
          <div className="card-footer">
            <Link to={'/connect/' + client.id}>more...</Link>
          </div>
        </div>
      </CardListItem>
    )
  }

  render() {
    let cards = clientStore.list().map(this.renderCard);
    return (
      <div>
        <PageHeader>
          {!ui.sidebar.open &&
          <a href="#" onClick={ui.toggleSidebar}><Icon name="menu" style={{marginRight: '1em'}}/></a>
          }
          <h3 className="title">Connect</h3>
        </PageHeader>
        <div className="px-3">
          <CardList>
            {cards}
          </CardList>
        </div>
      </div>

    )
  }
}

export default observer(ConnectView)