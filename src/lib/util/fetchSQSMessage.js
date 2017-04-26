// @flow

import axios from 'axios'

export default function (sqsUrl: string) {
  return axios(`${sqsUrl}?Action=ReceiveMessage`)
    .then(res => {
      let {ReceiveMessageResponse: {ReceiveMessageResult: {messages}}} = res.data
      let message = messages[0];
      let json = JSON.parse(message.Body);
      return {
        id: json.MessageId,
        type: 'SQSNotification',
        object: JSON.parse(json.Message),
        instrument: {
          type: 'SQSQueue',
          id: sqsUrl,
          name: json.TopicArn,
        },
      }
    })
    .catch(error => {
      console.error(error);
      throw ('Error recieving SQS message', {sqsUrl, error})
    })
}