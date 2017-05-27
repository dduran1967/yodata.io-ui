import {Model, createModel, transform, validate} from './Model'

const propTypes = {
  type: String,
  object: Object,
  startTime: Date,
  endTime: Date,
  targetCollection: String,
  actionStatus: String,
  error: Object,
  instrument: Object,
  location: Object,
  participant: Model.Array(Object),
};

const ActionStatusType = Model([
  'ActiveActionStatus',
  'CompletedActionStatus',
  'FailedActionStatus',
  undefined,
]);

const ActionModel = Model.Object({
  type: String,
  object: [ Object ],
  actionStatus: [ String ],
  startTime: [ Date ],
});

const createAction = props => {
  let model = createModel(props);
  return (type: string, data: Object) => {
    let action = transform({ type, ...data });
    let validation = validate({ action, model });
    return validation.isValid ? action : { ...validation, action };
  };
};

