import React from 'react'
import PropertiesListView from '../type/properties.list.view'
import Link from '../component/Link'
import {lit} from '../lib/rdf-utilities'
import types from '../schema/schema_graph'

class ActionView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.router = context.router
  }

  render() {
    let {id, navigateTo} = this.props;
    let subject = types.getSubject(id);
    if (!subject) return null;
    return (
      <div>

        <div className="breadcrumb">
          {subject.superTypes.map(({id, label}) =>
            <Link
              router={this.router}
              navigateTo={navigateTo}
              key={id}
              name="action.view"
              params={{id}}
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
}

ActionView.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ActionView;


