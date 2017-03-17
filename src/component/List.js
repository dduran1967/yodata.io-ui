import React from 'react'
import {lit} from '../lib/rdf-utilities'

const Item = ({key, id, label, url, description, onClick}) => (
  <a key={key || id} className="list-group-item list-group-item-action media" onClick={() => onClick({id,label,description,url})}>
    <div className="media-body">
      <h5 className="media-heading">{lit(label)}</h5>
      {lit(description)}
    </div>
  </a>
)

const ListView = ({listItems = [], onClick}) => (
  <div className="ListView">
    <div className="list-group">
      {listItems.map(item => Item({...item, onClick}))}
    </div>
  </div>
)


ListView.propTypes = {
  listItems: React.PropTypes.array
}

export default ListView;
