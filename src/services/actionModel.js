import Model from 'objectmodel'

export const M = Model

export const Thing = Model({
  type: String,
  id: [ String ],
  name: [ String ],
  description: [ String ],
})

export const EntryPoint = Thing.extend({
  actionApplication: Thing,
  actionPlatform: String,
  application: Thing,
  contentType: [ String ],
  encodingType: [ String ],
  httpMethod: [ String ],
  urlTemplate: [ String ],
});

export const Action = Thing.extend({
  type: String,
  agent: [ Thing ],
  object: [ Thing ],
  instrument: [ Array.of(Thing) ],
  target: [ EntryPoint ],
});
