import React from 'react';
import {lit} from '../lib/rdf-utilities';
import Link from 'react-router-dom/Link';

const ListView = ({listItems = []}) =>
  <div className="ListView">
    <div className="list-group">
      {listItems.map(({key, id, label, description, linkTo, onClick}) =>
        <Link
          key={key || id}
          to={linkTo || '#'}
          className="list-group-item list-group-item-action media"
          onClick={(e) => onClick(id)}>
          <div className="media-body">
            <h5 className="media-heading">{lit(label)}</h5>
            {lit(description)}
          </div>
        </Link>
      )}
    </div>
  </div>

export default ListView;
