import {connect} from 'react-redux';

const withSchemaItem = id =>
  connect((state, props) => {
    let ready = state.schema.hasData;
    let data = ready && state.schema.index[props.id];
    if (ready) {
      if (data) {
        return {data};
      }
      return {data: {id: '(Not Found)'}, error: true};
    }
    return {};
  });

export default withSchemaItem;
