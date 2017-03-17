import {autorun} from 'mobx';
import streams from '../store/stream.store';
import user from '../store/user.store';
import solid from 'solid-client/dist/solid-client.min';
import {values} from 'lodash';
import Stream from '../stream/_stream';

//autorun(function userStreamAutorun(){
//  solid.web
//       .get(user.stream)
//       .then(({resource}) => {
//         values(resource.containers)
//         .forEach(({name,types,uri,parsedGraph}) => {
//           let data = {url:uri, type:types, name, parsedGraph};
//           let stream = Stream(data)
//           streams.add(stream);
//         })
//       });
//})
