import root from 'window-or-global'
import schema from '../schema/schemaActions'
import stream from '../stream/streamActions'
import user from '../user/userActions';


if (!root.yo) {
  root.yo = {};
}

root.yo.act = {
  stream,
  schema,
  user
}


