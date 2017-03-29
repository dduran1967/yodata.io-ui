import React from 'react';
import {Link} from '../component';
import PropertiesListView from '../schema/PropertiesList';
import {lit} from '../lib/rdf-utilities';
import ActionNav from '../action/action.nav';

const TypeView = ({subject = {}, listPath, ...props}) => (
  <div>
    {/* breadcrumb */}
    {subject.superTypes &&
    <div className="breadcrumb">
      {subject.superTypes.map(({id, label}) =>
        <Link
          key={id}
          to={"/type/view/#" + id}
          className="breadcrumb-item">
          {lit(label)}
        </Link>
      )}
    </div>
    }
    <div className="p-3">

      {subject.description &&
      <section>
        <div dangerouslySetInnerHTML={{__html: subject.description.toString()}}/>
      </section>
      }

      <section>
        <PropertiesListView properties={subject.properties}/>
      </section>

    </div>
  </div>
)


export default TypeView;
