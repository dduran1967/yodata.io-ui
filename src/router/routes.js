import mapKeys from 'lodash/mapKeys'
import root from 'window-or-global'
import RestApiRoot from '../apidocs/restApiRoot.js'
import ChannelRoot from '../channel/ChannelRoot'
import ChannelView from '../channel/ChannelView'
import {Home} from '../component'
import DataBrowser from '../component/DataBrowser'
import TypesRoot from '../types/TypesRoot'
import TypeView from '../types/TypeView'
import {UserRoot} from '../user'
import Debug from '../component/Debug'
import ThrumeRoot from '../thrume/thrume-root'

export const sidebarRoutes = [
  {
    key:       'home',
    name:      'home',
    path:      '/',
    label:     'Home',
    component: Home,
    icon:      'home',
  },
  {
    key:       'thrume',
    name:      'thrume',
    path:      '/thrume',
    label:     'Thrume',
    component: ThrumeRoot,
    icon:      'feed',
  },
  {
    key:       'channel',
    name:      'channel',
    path:      '/channel',
    label:     'Channels',
    component: ChannelRoot,
    icon:      'hashtag',
  },
  {
    key:       'types',
    name:      'types',
    path:      '/schema',
    label:     'Schema',
    component: TypesRoot,
    icon:      'code',
  },
  {
    key:       'user',
    name:      'user',
    path:      '/user',
    label:     'User',
    component: UserRoot,
    icon:      'user',
  },
  {
    key:       'api',
    name:      'api',
    path:      '/api',
    label:     'REST API',
    component: RestApiRoot,
    icon:      'code',
  },

];

export const innerRoutes = [
  {
    name:      'channel/view',
    path:      '/channel/item/:key',
    component: ChannelView,
  },
  {
    name:      'types/view',
    path:      '/schema/:id',
    component: TypeView,
  },
  {
    name:      'databrowser',
    path:      '/u/*path',
    component: DataBrowser
  }
];

const routes = [...sidebarRoutes, ...innerRoutes];

export const routeMap = mapKeys(routes, 'name');

export default routes;

root.routes = routes;
