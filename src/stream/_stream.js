// @flow

import {observable, action} from 'mobx';
import stampit from 'stampit';
import Collection from '../component/Collection';
import Resource from '../component/Resource';
import solid from '../lib/solid-client.min';

const solidDB =
  stampit()
    .methods({
      dbCreate: function(data) {
        return solid.web.post(this.url,JSON.stringify(data,null,0))
        .then(({url,name}) => {
          return {
            id:url,
            name: name,
            url: url
          }
        })
      }
    })

const Stream =
  stampit()
  .compose(Resource, Collection)
  .props({
    acceptsType: [],
    typeName: 'Stream',
  })
  .methods({
    sendMessage: action('stream:sendMessage',function(data){
      const self = this;
      this.dbCreate(data).then(function({id,name,url}) {
          let newData = Object.assign({},data,{id,name,url});
          self.add(newData);
        })
    })
  })

// class Stream {
//   id: string
//
//   constructor(props) {
//     Object.assign(this,props);
//     extendObservable(this, {
//       values: [],
//       currentValue: {},
//       showValue: false,
//       createOnNext: action('stream:createOnNext', (e) => {
//         const self = this;
//         solid
//           .web
//           .post(this.id,JSON.stringify(e,null,1))
//           .then(response=>{
//             let {url} = response;
//             self.values.push({
//               id:url,
//               name: url.slice(self.id.length),
//               data: {...e}
//             });
//           });
//       }),
//       fetchOne: action('stream:fetchOne', (url) => {
//         fetch(url)
//         .then((response)=>{
//           console.log('this=',this);
//         })
//       }),
//       load: action('stream:load', () => {
//         const self = this;
//         solid
//           .web
//           .get(this.id)
//           .then(solidResponse => {
//             let {resources} = solidResponse.resource;
//             values(resources).forEach(doc => {
//               self.values.push({
//                 id: doc.uri,
//                 name: doc.name
//               })
//             })
//             this.hasBeenLoaded = true;
//           })
//       }),
//       setCurrentValue: action('stream:setCurrentValue',(url)=>{
//         const self = this;
//         fetch(url)
//         .then(response=>{
//           let contentType = response.headers.get('content-type');
//           switch(contentType){
//             case 'application/json':
//               response.json()
//               .then(data => {
//                 self.currentValue = data
//                 self.showValue = true;
//               });
//               break;
//             case 'text/turtle':
//               response.text()
//               .then(JSON.parse)
//               .then(data => {
//                 self.currentValue = {id:url, ...data};
//                 self.showValue = true;
//               })
//               break;
//             default:
//               console.error('unhandled contentType', contentType);
//           }
//         })
//       }),
//       postNewEventsToSolid: autorun('postNewEventsToSolid',function(){
//         console.debug('NEW EVENT',arguments);
//       })
//     });
//   }
// }

window.Stream = Stream;
export default Stream
