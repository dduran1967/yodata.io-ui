import React from 'react';
import {Link} from '../component';


const StreamListView = ({listItems}) =>
  <section className='list-group'>
    {listItems.map(({name}) => (
      <Link key={name} to={`/stream/${name}`} className="list-group-item list-group-item-action media">
        <div className="media-body">
          <h5 className="media-heading">{name}</h5>
        </div>
      </Link>
    ))}
  </section>

export default StreamListView;
