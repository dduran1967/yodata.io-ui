import {action} from 'mobx'

action('setCurrentAction', function ({uri}) {
  console.log('current action is ', uri);
})