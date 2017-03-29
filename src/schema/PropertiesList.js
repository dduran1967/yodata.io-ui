import React from 'react'
import {compose, withHandlers} from 'recompose'
import {lit} from '../lib/rdf-utilities'
import {Table, List} from 'semantic-ui-react';


const ListItem = ({property, choose, dispatch}) =>
  <tr>
    <td className="top aligned">
      {lit(property.label)}
    </td>
    <td>
      <List horizontal>
        <List.Item>
          {lit(property.range || property.rangeIncludes)}
        </List.Item>
        {property.termStatus &&
        <List.Item>
          <span>{lit(property.termStatus)}</span>
        </List.Item>
        }
      </List>
      <div className="hidden">
        <div dangerouslySetInnerHTML={{__html: property.description.toString()}}/>
      </div>
    </td>
  </tr>

const PropertiesListItem = compose(
  withHandlers({
    choose: props => event => {
      event.preventDefault();
      console.log(props)
    }
  })
)(ListItem);


export const PropertiesList = ({listItems = []}) =>
  <section>
    <Table>
      <thead>
      <tr>
        <th>Property</th>
        <th>Range <span className="hidden-xs">/ Description</span></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {listItems.map((property) => <PropertiesListItem key={property.id} {...{property}} />)}
      </tbody>
    </Table>
  </section>

export default PropertiesList