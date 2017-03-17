import {computed, extendObservable} from 'mobx';
import stampit from 'stampit';

const Collection = stampit({
  methods: {
    add(value) {
      this
        .items
        .push(value);
      return this;
    },
    get: function(key) {
      return this.index[key]
    }
  },
  init: ((options, {instance}) => {
    extendObservable(instance, {
      items: [],
      indexKey: null,
      index: computed(() => {
        return instance
          .items
          .reduce((a, b) => Object.assign(a, {
            [b[instance.indexKey]]: b
          }), {});
      }),
    })
    Object.assign(instance, options);
  }),
});

// const Collection = (options) => collectionStamp(options);
window.Collection = Collection;
// window.collectionStamp = collectionStamp;
export default Collection;
