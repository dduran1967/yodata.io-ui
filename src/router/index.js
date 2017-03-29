import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'
import routes from './routes'

const routerConfig = {}

const router = createRouter(routes, routerConfig)
.usePlugin(browserPlugin({useHash: true}))
.usePlugin(listenersPlugin())

export default router

export {default as withRoute} from './withRoute'
export {default as ViewSelector} from './ViewSelector';
export {routeMap} from './routes'

