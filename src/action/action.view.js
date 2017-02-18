import React from 'react';
import PropertiesListView from '../type/properties.list.view';
import {PageHeader, Link} from '../component'
import {lit} from '../lib/rdf-utilities';
import {observer} from 'mobx-react';

const ActionView = ({store, location}) => {
  let ui = store.ui;
  let types = store.typeStore;
  if (!types.ready) return null;
  let subjectUri = location.hash.substring(1);
  let subject = types.getSubject(subjectUri);
  if(!subject) return null;
  let headerConfig = {
    title:       subject.label,
    onNavToggle: !ui.sidebar.open ? ui.toggleSidebar : undefined,
  };
  return (
    <div>
    <PageHeader {...headerConfig}/>
    <div className="breadcrumb">
      {subject.superTypes.map(({id, label}) =>
        <Link
          key={id}
          to={"/action/view/#" + id}
          className="breadcrumb-item">
          {lit(label)}
        </Link>
      )}
    </div>
    <div className="px-3">
      <article>
        <section className="mb-5">
          <h4>{lit(subject.label)}</h4>
          {subject.description &&
            <div dangerouslySetInnerHTML={{__html: subject.description.toString()}}/>
          }
        </section>
        <section>
          <h4>Properties</h4>
          <PropertiesListView properties={subject.properties}/>
        </section>
      </article>
    </div>
    </div>
  )
}

export default observer(ActionView);
