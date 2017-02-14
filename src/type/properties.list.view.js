import React from 'react';
import {lit} from '../lib/rdf-utilities'

export const PropertiesListItem = ({property}) =>
  <tr className="property-list-item">
    <td>
      {lit(property.label)}
    </td>
    <td>
      <ul className="list list-inline">
        <li>{lit(property.range || property.rangeIncludes)}</li>
        {property.termStatus &&
        <li>
          <span className="label label-primary">{lit(property.termStatus)}</span>
        </li>
        }
      </ul>
      <div className="hidden-md-down">
        {lit(property.description)}
      </div>
    </td>
  </tr>

export const PropertiesListView = ({properties = {}}) =>
  <section>
    <table className="table model-properties">
      <thead>
      <tr>
        <th>Property</th>
        <th>Range <span className="hidden-xs">/ Description</span></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {Object.values(properties).map(p => <PropertiesListItem key={p.id} property={p}/>)}
      </tbody>
    </table>
  </section>

export default PropertiesListView