import Model from './Model'

const Thing = Model.Type.extend({
  additionalType: [ Array(String) ],
  alternateName: [ Array(String) ],
  name: [ String ],
  description: [ String ],
  context: [ String ],
  url: [ String ],
  label: [ Array(String) ],
})

export default Thing
