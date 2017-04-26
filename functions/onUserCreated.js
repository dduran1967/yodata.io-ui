function createUserAccount(user) {
  return {
    settings: {
      thrume: {
        url: `/in/${user.uid}`,
      },
    },
    profile: {
      card: {
        type: 'foaf:Profile',
        mainEntityOfPage: 'me',
        'me': {
          type: 'Person',
          email: user.email,
          inbox: `/in/${user.uid}`,
          storage: '/',
        },
      },
    },
  }
}

module.exports = function userAccountCreated(userPath, database) {
  return (event) => {
    if (!event.data) {
      // user account deleted
      return Promise.resolve();
    }
    let user = event.data;
    let path = userPath.replace('{uid}', user.uid);
    let accountData = createUserAccount(user);
    let userRef = database.ref(path);
    return userRef.update(accountData)
  };
};
