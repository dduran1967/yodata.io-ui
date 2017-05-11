import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Button from '../src/component/Button2.js'

export const buttonStories = storiesOf('Button', module)
  .add('default', () => (
  <Button>content</Button>
));
