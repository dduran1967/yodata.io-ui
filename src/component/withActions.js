import uuid from 'uuid/v1'
import stampit from 'stampit';

const withActions = stampit()
  .deepProps({
    potentialAction: {

    }
  })
  .init(function(options, {instance}) {
    Object.assign(instance, options);
  })

export default withActions;
