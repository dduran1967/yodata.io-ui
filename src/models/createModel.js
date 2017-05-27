import Model from 'objectmodel';

/**
 * returns a typed object creator/validator
 *
 * @param {array<string>} properties
 * @param {[array<string>]} required
 * @param {object} context
 * @returns {object}
 * @example
 *
 * const properties = [ 'type', 'agent', 'object' ]
 * const required = [ 'type', 'object' ]
 * const context = {
 *    type: String                   // required
 *    object: Object
 *    agent: [ Array(Object) ]       //  [ bracketed values are optional ]
 *    participant: [ Array(Object) ] // optional array of Objects
 *  }
 *
 * createModel({properties, required, context}) => Model<Object>
 *
 */
const ModelFactory = Model.Function({
  properties: Model.Array(String),
  required: [Model.Array(String)],
  context: Object
})
  .defaults({
    properties: ['type'],
    required: ['type']
  })
  .assert(function hasAllProperties(props) {
    const notFound = [];
    const { properties = [], context = {} } = props;
    properties.forEach(prop => {
      if (!context.hasOwnProperty(prop)) {
        notFound.push(prop);
      }
    });
    return notFound.length === 0;
  }, 'Some properties were not found in context');

const createModel = new ModelFactory(function({
  properties,
  context,
  required
}) {
  let schema = properties.reduce((model, key) => {
    let dataType = context[key];
    if (typeof dataType === 'undefined') {
      console.error(`property ${key} not in context`);
    }
    let value = required.includes(key) ? dataType : [dataType];
    return { ...model, [key]: value };
  }, {});
  return Model(schema);
});

export default createModel
