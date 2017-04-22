// @flow

export default function createDefaultContainer(uid: string): Thing {
  return {
    'type': 'ThrumeSettings',
    'id': `/user/${uid}/thrume`,
    inboxURL: `/in/${uid}`,
    'webhook': {
      enabled: false,
      url: '',
    },
    debug: false,
  }
}