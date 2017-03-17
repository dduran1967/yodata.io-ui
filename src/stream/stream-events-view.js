import React from 'react';
import {observer} from 'mobx-react';

const StreamEventsView = ({stream, items,}) => {
  if (!items)
    return null;
  return (
    <section className="mb-3">
      <h6 className="section-title">EVENTS</h6>
      <div className="list-group">
        {items
          .slice(-10)
          .map(event =>
            <div className="list-group-item list-group-item-action d-flex"
              key={event.id}
              onClick={() => stream.setCurrentValue(event.id)}
            >{event.name}
          </div>)
        }
      </div>
    </section>
  )
}

export default observer(StreamEventsView)
