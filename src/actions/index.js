import root from 'window-or-global'
import channel from '../channel/channelActions'
import schema from '../schema/schemaActions'
import user from '../user/userActions'

if (!root.yo) {
  root.yo = {};
}

root.yo.act = {
  user,
  channel,
  schema
}


