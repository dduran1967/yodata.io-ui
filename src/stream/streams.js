import {observable, extendObservable, action, autorun} from 'mobx';
import solid from 'solid-client';
import user from '../store/user';
import {values} from 'lodash';
import Stream from './stream';

class StreamStore {
  constructor() {
    extendObservable(this, {
      items: observable.map(),
      baseUrl: user.stream,
      currentStream: undefined,
      create: action('stream:create', (name)=> {
        solid.web
             .createContainer(this.baseUrl, name)
             .then(() => {
               this.set(name,{
                 id:   this.baseUrl.concat(name),
                 name: name
               });
            });
      }),
      fetch:    action('stream:fetch', () => {
        solid.web
             .get(this.baseUrl)
             .then(({resource}) => {
               values(resource.containers)
                .map(({name,types,uri,parsedGraph}) => this.items.set(name, new Stream({id:uri, type:types, name, parsedGraph, uri })))
             });
      }),
      set:     action('stream:set',function(name,value){
        return this.items.set(name,value);
      }),
      post:    action('httpPost', ({url, data}) => {
        let slug = Date.now() + '.json';
        solid.web.post(url, data, slug)
             .then(response => console.log(response))
             .catch(err => console.error(err));
      }),
      values: () => this.items.values(),
      get: (v) => this.items.get(v)
    });
  }
  has = (name:string):boolean => {
    return typeof this.get(name) !== 'undefined';
  }

}

const stream$ = window.stream$ = new StreamStore();
export default observable(stream$);

autorun(function loadDocs() {
  if (user && user.stream) {
    stream$.fetch();
  }
})

autorun(function() {
  if(stream$.currentStream) {
    stream$.currentStream.load();
  }
})
