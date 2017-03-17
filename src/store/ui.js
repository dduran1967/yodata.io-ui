import {observable, extendObservable, autorun, action} from 'mobx';

class UIState {
  constructor() {
    extendObservable(this, {
      sidebar:       {
        open: true
      },
      routes:        [
        {}
      ],
      currentUserId: '',
      currentUser:   {},
      currentClient: {},
      pageTitle:     '',
      toggleSidebar: action('toggleSidebar', () => {
        this.sidebar.open = !this.sidebar.open;
      })
    })
  }
}

const ui = window.ui = new UIState();
export default observable(ui);

autorun(() => {
  console.log(ui);
})
