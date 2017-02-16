// @flow
import {observable, extendObservable, action, autorun} from 'mobx';
import solid from 'solid-client';
import user from '../store/user';

class DocumentStore {
  constructor() {
    extendObservable(this, {
      acl:        undefined,
      meta:       undefined,
      user:       undefined,
      url:        undefined,
      types:      undefined,
      containers: undefined,
      resources:  undefined,
      load:       action((uri: string) => {
        if (typeof uri === 'string') {
          solid.web.get(uri)
               .then(response => {
                 let {acl, meta, url, user, types, resource} = response;
                 let {containers, resources} = resource;
                 Object.assign(this, {acl, meta, url, types, user, containers, resources});
               });
        }
      }),
      post:       action('httpPost', ({url, data}) => {
        let slug = Date.now() + '.json';
        solid.web.post(url, data, slug)
             .then(response => console.log(response))
             .catch(err => console.error(err));
      })
    });
  }
}

const documentStore = window.doc$ = new DocumentStore();
export default documentStore

autorun(function loadDocs() {
  if (user && user.storage) {
    documentStore.load(user.storage);
  }
})
