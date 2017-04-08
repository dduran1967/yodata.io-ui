import times from 'lodash/times';
import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Appbar from '../src/component/Appbar';
import '../src/style/semantic.css';
import SliderInput from '../src/component/SliderInput';
import Header from '../src/component/Header';
import SearchPill from '../src/component/SearchPill';
import searchInterface, {SearchDebug} from '../src/component/searchInterface';
import Chance from 'chance';
const fake = new Chance();

const items = [
  {key: 'toggle', icon: 'bars'},
  {key: 'brand', content: <strong>Yodata</strong>},
  {
    key: 'editorials',
    active: true,
    name: 'Editorials',
    onClick: e => console.log(e),
  },
  {key: 'review', name: 'Reviews'},
  {key: 'events', name: 'Upcoming Events'},
];

const appbarStories = storiesOf('Appbar', module).add('default', () => (
  <Appbar items={items} />
));

const sliderInputStories = storiesOf(
  'SliderInput',
  module,
).add('default', () => (
  <SliderInput placeholder="placeholder" onSubmit={action('SUBMIT')} />
));

const headerStories = storiesOf('Header', module);

headerStories.add('default', () => (
  <Header icon="user" content="Header">
    <SliderInput placeholder="slider input" />
  </Header>
));

class SearchResult {
  key: string = fake.android_id();
  title: string = fake.sentence();
  description: string = fake.sentence();
}
const results = times(3, () => {
  return new SearchResult();
});
console.log(results);

const searchStories = storiesOf('Search', module);
searchStories.add('initial state', () => <SearchPill />);
searchStories.add('results visible', () => <SearchPill results={results} />);
