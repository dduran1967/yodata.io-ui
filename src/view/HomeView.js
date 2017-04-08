import React from 'react';
import configureSearchInterface, {
  SearchDebug,
} from '../component/searchInterface';

const Search = configureSearchInterface()(SearchDebug);

const Home = props => (
  <div>
    <h1>home</h1>
    <Search />
  </div>
);

export default Home;
