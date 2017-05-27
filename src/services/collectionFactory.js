// @flow

import * as Rx from 'rxjs'
import Service from './serviceFactory'

const CollectionService = Service
  .props({
    eventMiddleware: [
      function addTargetCollection(action, context) {
        return { ...action, targetCollection: context.targetCollection || context.name }
      },
    ],
  })
  .methods({
    composeAction(type, object, meta) {
      return {
        type: type,
        object: { ...object },
        ...meta
      }
    },
    add(object, meta) {
      return this.dispatch(
        this.composeAction('AddAction', object, meta),
      );
    },
    update(object, meta) {
      return this.dispatch(
        this.composeAction('UpdateAction', object, meta),
      );
    },
    delete(object, meta) {
      return this.dispatch(
        this.composeAction('DeleteAction', object, meta),
      );
    },
  }).init(function ({ targetCollection }) {
    this.targetCollection = targetCollection
  })

export default CollectionService
