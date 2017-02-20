// @flow

import {observable, extendObservable, action, computed} from 'mobx';
import Stream from './stream';
import stampit from 'stampit';
import Collection from '../component/Collection';
import Resource from '../component/Resource';

const config = {
  name: 'streams',
  typeName: 'StreamCollection',
  indexKey: 'name'
  }

const stamp = stampit(config).compose(Resource,Collection);

const streams = window.streams = new Collection(config);

export default streams;
// debug
