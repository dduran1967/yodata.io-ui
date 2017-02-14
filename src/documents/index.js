// @flow
import React from 'react';
import {observer} from 'mobx-react';
import {PageHeader} from '../component';
import {map} from 'lodash';

class DocumentViewController extends React.Component {

  render() {
    let {store} = this.props;
    let {sidebar, toggleSidebar} = store.ui;
    let docs = store.docs;
    let user = store.user;
    let headerConfig = {
      title:       'Cloud Documents',
      onNavToggle: !sidebar.open ? toggleSidebar : undefined
    };
    return (
      <div>

        <PageHeader {...headerConfig}/>

        <div className="breadcrumb">
          <a href="#" className="breadcrumb-item">{user.storage}</a>
        </div>

        <main className="p-3">
          <section>
            {map(docs.containers).map(({name, uri}) => (
              <div>
                <a href={'#/list/'+uri} onClick={() => docs.load(uri)}>{name}</a>
              </div>
            ))}
            {map(docs.resources).map(({name, uri}) => (
              <div>
                <a href={'#/load/'+uri} onClick={() => docs.load(uri)}>{name}</a>
              </div>
            ))}
          </section>
        </main>


      </div>
    )
  }
}


export default observer(DocumentViewController);