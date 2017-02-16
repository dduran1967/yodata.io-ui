import {observable, autorun, extendObservable, action} from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      name:      'Yodata developer',
      webid:     'https://devtest.yodata.me/profile/card#me',
      storage:   'https://devtest.yodata.me/',
      inbox:     'https://devtest.yodata.me/inbox/',
      stream:    'https://devtest.yodata.me/stream/',
      client:    [],
      addClient: action(function (id) {
        return this.client.push[id];
      })
    })
  }

  hasClient(id) {
    return this.client.includes(id);
  };

}

const user = window.user = new UserStore();
export default observable(user);

autorun(() => {
  console.log(user);
})
