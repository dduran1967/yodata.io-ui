import Collection from '../component/Collection.js'

class User {
  constructor(props) {
    Object.assign(this, props);
  }
}

const users = window.users = Collection({
  name:     'users',
  typeName: 'User',
  indexKey: 'id',
  current:  new User({
    id:     'https://devtest.yodata.me/profile/card#me',
    name:   'dev test',
    stream: 'https://devtest.yodata.me/stream/'
  })
});



