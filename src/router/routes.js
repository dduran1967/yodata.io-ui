import mapKeys from 'lodash/mapKeys'
import root from 'window-or-global'
import RestApiRoot from '../apidocs/restApiRoot.js'
import ChannelRoot from '../channel/ChannelRoot'
import ChannelView from '../channel/ChannelView'
import { Home } from '../component'
import DataBrowser from '../component/DataBrowser'
import TypesRoot from '../types/TypesRoot'
import TypeView from '../types/TypeView'
import { UserRoot } from '../user'
import Reactions from '../reaction/ReactionRoot.js'
import ActionRoot from '../action/ActionRoot.js'
import ActionView from '../action/ActionView'
import AppsRoot from '../apps/AppsRoot'
import AppView from '../apps/AppView'
import ThrumeRoot from '../thrume/thrume-root';

export const sidebarRoutes = [
  {
    key: 'home',
    name: 'home',
    path: '/',
    label: 'Home',
    component: Home,
    icon: 'home',
    requiresLogin: true,
  },
  {
    key: 'schema',
    name: 'schema',
    path: '/schema',
    label: 'Schema',
    component: TypesRoot,
    icon: 'code',
  },
  {
    key: 'actions',
    name: 'actions',
    path: '/actions',
    label: 'Actions',
    component: ActionRoot,
    icon: 'feed',
  },
  {
    key: 'apps',
    name: 'apps',
    path: '/apps',
    label: 'Applications',
    component: AppsRoot,
    icon: 'code',
  },
  {
    key: 'reactions',
    name: 'reactions',
    path: '/reactions',
    label: 'Reactions',
    component: Reactions,
    icon: 'feed',
  },
  {
    key: 'channel',
    name: 'channel',
    path: '/channel',
    label: 'Channels',
    component: ChannelRoot,
    icon: 'hashtag',
  },
  {
    key: 'user',
    name: 'user',
    path: '/user',
    label: 'Settings',
    component: UserRoot,
    icon: 'user',
  },
  {
    key: 'api',
    name: 'api',
    path: '/api',
    label: 'REST API',
    component: RestApiRoot,
    icon: 'code',
  },
];

export const innerRoutes = [
  {
    name: 'channel/view',
    path: '/channel/item/:key',
    component: ChannelView,
  },
  {
    name: 'types/view',
    path: '/schema/:id',
    component: TypeView,
  },
  {
    name: 'databrowser',
    path: '/u/*path',
    component: DataBrowser,
  },
  {
    name: 'action/view',
    path: '/actions/:id',
    component: ActionView,
  },
  {
    name: 'app/view',
    path: '/apps/:id',
    component: AppView,
  },
  {
    name: 'thrume',
    path: '/quickstart',
    component: ThrumeRoot,
  },
];

const routes = [ ...sidebarRoutes, ...innerRoutes ];

export const routeNameIndex = mapKeys(routes, 'name');
export const routeMap = routeNameIndex;

export default routes;

root.routes = routes;
