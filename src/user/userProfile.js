// @flow

export default {
  type: 'foaf:PersonalProfileDocument',
  'foaf:maker': 'me',
  'foaf:primaryTopic': 'me',
  me: {
    type: 'Person',
    id: '/profile/card#me',
    'solid:account': '/',
    'solid:inbox': '',
    'pim:prefferencesFile': '/settings/prefs',
    'solid:publicTypeIndex': '/settings/publicTypeIndex',
    'solid:privateTypeIndex': '/settings/privateTypeIndex',
    'name': 'Bob Smith',
    'email': 'bob@yodata.io',
  },
}