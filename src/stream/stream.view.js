import React from 'react';
import {observer} from 'mobx-react';

class StreamView extends React.Component {
  render() {
    let {stream} = this.props;
    return (
      <div className="px-3">
        {this.props.stream &&
        <article>
          <h4>{stream.name}</h4>

          {stream.values &&
          <table className="table">
            <thead>
              <tr>
                <th>
                  event
                </th>
              </tr>
            </thead>
            <tbody>
              {stream.values.map(event=>
                <tr key={event.name}><td>{event && event.name}</td></tr>
              )}
            </tbody>
          </table>
          }
        </article>
        }
      </div>
    )
  }
}

export default observer(StreamView);
