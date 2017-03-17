import Collection from '../component/Collection'

const streams = window.streams = Collection({
  name:     'streams',
  typeName: 'StreamCollection',
  indexKey: 'name'
});

export default streams;
