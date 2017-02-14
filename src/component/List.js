import React from 'react';
import {lit} from '../lib/rdf-utilities';
import Link from 'react-router-dom/Link';

const ListView = ({listItems = [], onLink, linkTo, ...props}) =>
  <div className="ListView">
    <div className="list-group">
      {listItems.map(({id, label, description}) =>
        <Link
          key={id}
          to={linkTo + '#' + id}
          className="list-group-item list-group-item-action media"
          onClick={(e) => onLink(id)}>
          <div className="media-body">
            <h5 className="media-heading">{lit(label)}</h5>
            {lit(description)}
          </div>
        </Link>
      )}
    </div>
  </div>

export default ListView;
