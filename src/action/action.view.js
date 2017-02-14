import React from 'react';
import PropertiesListView from '../type/properties.list.view';
import ActionNav from './action.nav';
import {lit} from '../lib/rdf-utilities';


class ActionView extends React.Component {
  render() {
    let {subject = {}} = this.props;
    return (
      <div className="px-3">

        <ActionNav/>

        <article>
          {subject &&
          <section className="mb-5">
            <h4>{lit(subject.label)}</h4>
            <div dangerouslySetInnerHTML={{__html: subject.description.toString()}}/>
          </section>
          }

          <section>
            <h4>Properties</h4>
            <PropertiesListView properties={subject.properties}/>
          </section>
        </article>

      </div>
    )
  }
}


export default ActionView;
