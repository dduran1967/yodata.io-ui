const initialState = {
  type:     'LDPContainer',
  kind:     'Resource',
  items:    [
    {
      type:   'Stream',
      id:     'https://devtest.yodata.me/stream/website/',
      name:   'website',
      url:    'https://devtest.yodata.me/stream/website/',
      action: [
        {
          type:        'RegisterAction',
          name:        'RegisterAction',
          id:          'http://schema.org/RegisterAction',
          description: 'the agent has registered to receive updates from the subject website',
          url:         'https://yodata.me/vocab/RegisterAction'
        }
      ]
    }
  ],
  json:     {
    "website": {
      type:     'Stream',
      id:       'https://devtest.yodata.me/stream/website/',
      name:     'website',
      url:      'https://devtest.yodata.me/stream/website/',
      action:   [
        {
          type:        'RegisterAction',
          name:        'RegisterAction',
          id:          'http://schema.org/RegisterAction',
          description: 'the agent has registered to receive updates from the subject website',
          url:         'https://yodata.me/vocab/RegisterAction'
        }
      ],
      contains: {}
    }
  },
  selected: {
    type:   'Stream',
    id:     'https://devtest.yodata.me/stream/website/',
    name:   'website',
    url:    'https://devtest.yodata.me/stream/website/',
    action: [
      {
        type:        'RegisterAction',
        name:        'RegisterAction',
        id:          'http://schema.org/RegisterAction',
        description: 'the agent has registered to receive updates from the subject website',
        url:         'https://yodata.me/vocab/RegisterAction'
      }
    ]
  },
}

export default initialState;