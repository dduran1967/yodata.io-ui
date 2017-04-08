import {Segment} from 'semantic-ui-react';
import {defaultProps} from 'recompose';

const Section = defaultProps({
  basic: true,
})(Segment);

export default Section;
