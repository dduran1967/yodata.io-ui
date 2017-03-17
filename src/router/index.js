import createRouter from 'router5'
import loggerPlugin from 'router5/plugins/logger'
import listenersPlugin from 'router5/plugins/listeners'
import browserPlugin from 'router5/plugins/browser'
import routes from './routes'

function configureRouter(useListenersPlugin = false) {
  const router = createRouter(routes, {defaultRoute: 'home'})
  .usePlugin(browserPlugin({useHash: true}))
  .usePlugin(loggerPlugin)

  if (useListenersPlugin) {
    router.usePlugin(listenersPlugin());
  }

  return router;
}

const router = configureRouter();
export default router
