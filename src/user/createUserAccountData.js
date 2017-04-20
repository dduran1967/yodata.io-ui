// @flow

export default function createUserAccountData(base: string, user: FirebaseUser) {
  return {
    profile: {
      uid:        user.uid,
      name:       user.displayName,
      email:      user.email,
      image:      user.photoURL,
      authDomain: user.authDomain
    }
  }
}