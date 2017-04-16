import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import {Button, Dropdown} from 'semantic-ui-react';
import classNames from 'classnames';

const dropdownConfig = {
  text: 'options',
  button: true,
  defaultOpen: true,
  options: [
    {
      text: 'delete channel',
      value: 'delete',
      icon: 'delete',
      onClick: action('deleteChannel'),
    },
  ],
};

export const buttonStories = storiesOf('Button', module).add('dropdown', () => (
  <Dropdown {...dropdownConfig} />
));
