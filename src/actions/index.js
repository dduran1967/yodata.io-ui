import stream from '../stream/streamActions'
import schema from '../schema/schema_actions'

const actions = window.act = Object.assign({}, stream, schema)

export default actions;

