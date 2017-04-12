import React from 'react';
import {compose, withHandlers} from 'recompose';
import {lit} from '../lib/rdf-utilities';
import {Table, List} from 'semantic-ui-react';
import {track} from 'react-redux-form';
import {Debug} from '../component/index';
import entries from 'lodash/entries';

const ListItem = ({property, choose, dispatch}) => (
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
          </List.Item>}
      </List>
      <div className="hidden">
        <div
          dangerouslySetInnerHTML={{__html: property.description.toString()}}
        />
      </div>
    </td>
  </tr>
);

const PropertiesListItem = compose(
  withHandlers({
    choose: props =>
      event => {
        event.preventDefault();
      },
  }),
)(ListItem);

export const PropertiesList = ({items = []}) => (
  <Table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Range / Description</th>
      </tr>
    </thead>
    <tbody>
      {entries(items).map(([group, properties]) => {
        if (properties.length < 1) return null;
        let header = (
          <tr key={group}>
            <td colSpan={2}><strong>implements {group}</strong></td>
          </tr>
        );
        let proprows = properties.map(item => <ListItem property={item} />);
        return [header, proprows];
      })}
    </tbody>
  </Table>
);

export default PropertiesList;
