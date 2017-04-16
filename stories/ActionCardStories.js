import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import {Card, Button} from 'semantic-ui-react';
import Action from '../src/action/Action';
import {compose, lifecycle, withState, withHandlers} from 'recompose';

const enhance = compose(
  withState('open', 'setOpen', false),
  withHandlers({
    toggle: ({open, setOpen}) =>
      () => {
        setOpen(!open);
      },
  }),
);

const ActionCard = enhance(({data, json, toggle}) => {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">{data.type}</div>
        <div
          ref={div => {
            contentBox = div;
          }}
          className="description"
        >
          <pre><code>{json}</code></pre>
        </div>
      </div>
      <div className="extra">
        <button className="ui basic primary button" onClick={toggle}>
          do something
        </button>
      </div>
    </div>
  );
});

export default storiesOf('ActionCard', module).add('open', () => {
  const action = new Action('Action');
  const data = action.mock();
  const json = JSON.stringify(data, null, 2);
  return <ActionCard {...{data, json}} />;
});
