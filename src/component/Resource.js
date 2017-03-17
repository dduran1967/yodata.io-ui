import uuid from 'uuid/v1'
import stampit from 'stampit'

const Resource = stampit()
.props({
  id:          uuid(),
  type:        "Resource",
  kind:        undefined,
  url:         undefined,
  name:        undefined,
  description: undefined
})
.init(function (options, {instance}) {
  Object.assign(instance, options);
})

window.Resource = Resource;
export default Resource;
