import {extendObservable, action} from 'mobx';
import {createId} from '../lib/rdf-utilities';
import solid from 'solid-client';
import {values} from 'lodash';

class Stream {
  constructor(props){
    extendObservable(this, {
      id:   undefined,
      type: undefined,
      name: undefined,
      hasBeenLoaded: false,
    values: [],
      ...props,
      createOnNext: action('stream:createOnNext', (e)=>{
        let slug = Date.now() + '.json';
        let doc = JSON.stringify(e);
        solid.web.post(this.id, doc, slug)
             .then(response => console.log(response))
             .catch(err => console.error(err));
      }),
      load: action('stream:load',()=>{
        solid.web.get(this.id)
        .then(container => {
          let events = values(container.resource.resources).map(event => {
            return {
              name: event.name,
              type: event.types,
              id: event.uri,
            }
          });
          this.values = this.values.concat(events);
          this.hasBeenLoaded = true;
        })
      })
    });
  }

}

window.Stream = Stream;
export default Stream
